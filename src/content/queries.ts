import { getEntry } from 'astro:content';

export async function getSiteData() {
  const entry = await getEntry('site', 'site');

  if (!entry) {
    throw new Error('Missing site global content entry: src/content/site/site.json');
  }

  return entry.data;
}

export async function getNavigationData() {
  const entry = await getEntry('navigation', 'navigation');

  if (!entry) {
    throw new Error('Missing navigation global content entry: src/content/navigation/navigation.json');
  }

  return entry.data;
}

export async function getPageContent(slug: string) {
  const pageEntry = await getEntry('pages', slug);
  const pageDataEntry = await getEntry('pageData', slug);

  if (!pageEntry) {
    throw new Error(`Missing page copy entry: src/content/pages/${slug}.md`);
  }

  if (!pageDataEntry) {
    throw new Error(`Missing page data entry: src/content/pageData/${slug}.json`);
  }

  const { Content } = await pageEntry.render();

  return {
    copy: pageEntry.data,
    data: pageDataEntry.data,
    Content,
  };
}
