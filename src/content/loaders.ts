import { getEntry, type CollectionEntry } from 'astro:content';

const required = async <T>(promise: Promise<T | undefined>, name: string): Promise<T> => {
  const entry = await promise;

  if (!entry) {
    throw new Error(`Missing content entry: ${name}`);
  }

  return entry;
};

export type PageId = 'home' | 'about' | 'capabilities' | 'quality' | 'contact' | 'product-development';

export const getPage = (id: PageId) => required(getEntry('pages', id), `pages/${id}`);

export const getSite = async () => (await required(getEntry('site', 'site'), 'site/site')).data;

export const getNavigation = async () => (await required(getEntry('navigation', 'navigation'), 'navigation/navigation')).data;

export const getHomeData = async () => (await required(getEntry('homeData', 'home'), 'homeData/home')).data;
export const getAboutData = async () => (await required(getEntry('aboutData', 'about'), 'aboutData/about')).data;
export const getCapabilitiesData = async () =>
  (await required(getEntry('capabilitiesData', 'capabilities'), 'capabilitiesData/capabilities')).data;
export const getProductDevelopmentData = async () =>
  (await required(getEntry('productDevelopmentData', 'product-development'), 'productDevelopmentData/product-development')).data;
export const getQualityData = async () => (await required(getEntry('qualityData', 'quality'), 'qualityData/quality')).data;
export const getContactData = async () => (await required(getEntry('contactData', 'contact'), 'contactData/contact')).data;

export type SiteConfig = Awaited<ReturnType<typeof getSite>>;
export type NavigationConfig = Awaited<ReturnType<typeof getNavigation>>;
export type PageEntry = CollectionEntry<'pages'>;
