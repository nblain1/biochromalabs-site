import { promises as fs } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function normalizeInternalUrl(raw) {
  if (!raw || !raw.startsWith('/')) return null;
  if (raw.startsWith('//')) return null;

  const [pathname] = raw.split(/[?#]/);
  return pathname;
}

function candidatesForPath(pathname) {
  const cleanPath = pathname.replace(/\/+/g, '/');
  if (cleanPath === '/') {
    return [path.join(distDir, 'index.html')];
  }

  const withoutLeadingSlash = cleanPath.replace(/^\//, '');
  const basePath = path.join(distDir, withoutLeadingSlash);

  if (path.extname(withoutLeadingSlash)) {
    return [basePath];
  }

  return [
    path.join(basePath, 'index.html'),
    `${basePath}.html`,
  ];
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

function extractAssetAndLinkRefs(html) {
  const refs = [];
  const hrefRegex = /<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/gi;
  const srcRegex = /<(?:img|script)\b[^>]*\bsrc\s*=\s*(["'])(.*?)\1/gi;

  for (const match of html.matchAll(hrefRegex)) {
    refs.push({ type: 'href', value: match[2] });
  }

  for (const match of html.matchAll(srcRegex)) {
    refs.push({ type: 'src', value: match[2] });
  }

  return refs;
}

async function main() {
  if (!(await exists(distDir))) {
    console.error('✗ dist/ not found. Run `npm run build` before `npm run check:dist`.');
    process.exit(1);
  }

  const htmlFiles = await collectHtmlFiles(distDir);
  const errors = [];

  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, 'utf8');
    const refs = extractAssetAndLinkRefs(html);

    for (const ref of refs) {
      const pathname = normalizeInternalUrl(ref.value);
      if (!pathname) continue;

      const candidates = candidatesForPath(pathname);
      const resolved = await Promise.all(candidates.map((candidate) => exists(candidate)));

      if (!resolved.some(Boolean)) {
        const relativeHtml = path.relative(distDir, htmlPath) || 'index.html';
        const candidateOutput = candidates
          .map((candidate) => path.relative(distDir, candidate))
          .join(' OR ');

        errors.push(`- ${relativeHtml}: ${ref.type}="${ref.value}" -> missing (${candidateOutput})`);
      }
    }
  }

  if (errors.length > 0) {
    console.error('✗ Internal link/asset checks failed:\n');
    console.error(errors.join('\n'));
    process.exit(1);
  }

  console.log(`✓ check:dist passed (${htmlFiles.length} HTML file(s) scanned)`);
}

main().catch((error) => {
  console.error('✗ check:dist crashed with an unexpected error:');
  console.error(error);
  process.exit(1);
});
