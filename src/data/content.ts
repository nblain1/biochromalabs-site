import site from '../content/globals/site.json';
import navigation from '../content/globals/navigation.json';

import homeCopy from '../content/pages/home.md';
import aboutCopy from '../content/pages/about.md';
import capabilitiesCopy from '../content/pages/capabilities.md';
import qualityCopy from '../content/pages/quality.md';
import contactCopy from '../content/pages/contact.md';

import homeData from '../content/data/home.json';
import aboutData from '../content/data/about.json';
import capabilitiesData from '../content/data/capabilities.json';
import qualityData from '../content/data/quality.json';
import contactData from '../content/data/contact.json';

export { site, navigation };

export const pageCopy = {
  home: homeCopy,
  about: aboutCopy,
  capabilities: capabilitiesCopy,
  quality: qualityCopy,
  contact: contactCopy,
};

export const pageData = {
  home: homeData,
  about: aboutData,
  capabilities: capabilitiesData,
  quality: qualityData,
  contact: contactData,
};
