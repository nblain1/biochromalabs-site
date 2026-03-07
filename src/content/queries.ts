import { getCollection, render } from 'astro:content';

async function findCollectionEntry(collection: Parameters<typeof getCollection>[0], slug: string) {
  const entries = await getCollection(collection as any);
  const entry = entries.find((item) => item.slug === slug || item.id === slug || item.id.endsWith(`/${slug}`));

  if (!entry) {
    throw new Error(`Missing content entry: ${collection}/${slug}`);
  }

  return entry;
}

async function requireSingleton(collection: Parameters<typeof getCollection>[0]) {
  const entries = await getCollection(collection as any);
  const [entry] = entries;

  if (!entry) {
    throw new Error(`Missing content collection entry: ${collection}`);
  }

  return entry;
}

export async function getSiteContent() {
  const siteEntry = await requireSingleton('site');
  const navigationEntry = await requireSingleton('navigation');

  return {
    site: siteEntry.data,
    navigation: navigationEntry.data,
  };
}

export async function getPageCopy(slug: string) {
  const entry = await findCollectionEntry('pages', slug);
  const { Content } = await render(entry as any);

  return {
    data: entry.data,
    Content,
  };
}

export async function getPageData(collection: Parameters<typeof getCollection>[0], slug: string) {
  const entry = await findCollectionEntry(collection, slug);
  return entry.data;
}
