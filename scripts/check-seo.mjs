import { promises as fs } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const PLACEHOLDER_PATTERN = /\b(?:TODO|TBD|lorem)\b/gi;
const PLACEHOLDER_ALLOWLIST = [
  // Add exact placeholders here if needed for intentional cases.
];

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ');
}

function extractText(html) {
  return stripScriptsAndStyles(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTitle(html) {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : '';
}

function extractMetaDescription(html) {
  const metaRegex = /<meta\b[^>]*>/gi;
  for (const metaTag of html.match(metaRegex) || []) {
    const nameMatch = metaTag.match(/\bname\s*=\s*(["'])(.*?)\1/i);
    if (!nameMatch || nameMatch[2].toLowerCase() !== 'description') continue;

    const contentMatch = metaTag.match(/\bcontent\s*=\s*(["'])(.*?)\1/i);
    return contentMatch ? contentMatch[2].trim() : '';
  }

  return '';
}

function countH1(html) {
  return (html.match(/<h1\b[^>]*>/gi) || []).length;
}

function findPlaceholders(text) {
  const found = new Set();
  for (const match of text.matchAll(PLACEHOLDER_PATTERN)) {
    const token = match[0];
    if (!PLACEHOLDER_ALLOWLIST.includes(token)) {
      found.add(token);
    }
  }
  return [...found];
}

async function main() {
  if (!(await exists(distDir))) {
    console.error('✗ dist/ not found. Run `npm run build` before `npm run check:seo`.');
    process.exit(1);
  }

  const htmlFiles = await collectHtmlFiles(distDir);
  const errors = [];

  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, 'utf8');
    const relativeHtml = path.relative(distDir, htmlPath) || 'index.html';

    const title = extractTitle(html);
    if (!title) {
      errors.push(`- ${relativeHtml}: missing or empty <title>`);
    }

    const description = extractMetaDescription(html);
    if (!description) {
      errors.push(`- ${relativeHtml}: missing or empty <meta name="description">`);
    }

    const h1Count = countH1(html);
    if (h1Count !== 1) {
      errors.push(`- ${relativeHtml}: expected exactly one <h1>, found ${h1Count}`);
    }

    const text = extractText(html);
    const placeholders = findPlaceholders(text);
    if (placeholders.length > 0) {
      errors.push(`- ${relativeHtml}: placeholder token(s) found: ${placeholders.join(', ')}`);
    }
  }

  if (errors.length > 0) {
    console.error('✗ SEO checks failed:\n');
    console.error(errors.join('\n'));
    process.exit(1);
  }

  console.log(`✓ check:seo passed (${htmlFiles.length} HTML file(s) scanned)`);
}

main().catch((error) => {
  console.error('✗ check:seo crashed with an unexpected error:');
  console.error(error);
  process.exit(1);
});
