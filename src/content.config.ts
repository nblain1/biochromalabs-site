import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      layoutTitle: z.string().optional(),
      layoutDescription: z.string().optional(),
    })
    .passthrough(),
});

const pageData = defineCollection({
  type: 'data',
  schema: z
    .object({
      meta: z
        .object({
          title: z.string(),
          description: z.string(),
        })
        .optional(),
      hero: z
        .object({
          eyebrow: z.string().optional(),
          title: z.string().optional(),
          lead: z.string().optional(),
          mediaCaptionTitle: z.string().optional(),
          mediaCaptionText: z.string().optional(),
        })
        .optional(),
    })
    .passthrough(),
});

const globalSite = defineCollection({
  type: 'data',
  schema: z.object({
    brandName: z.string(),
    legalName: z.string(),
    description: z.string(),
    phone: z.string(),
    email: z.string().email(),
    social: z.record(z.string()),
    address: z.object({
      line1: z.string(),
      line2: z.string(),
    }),
    header: z.object({
      primaryCtaLabel: z.string(),
      primaryCtaHref: z.string(),
    }),
    footer: z.object({
      exploreTitle: z.string(),
      contactTitle: z.string(),
    }),
  }),
});

const globalNavigation = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

export const collections = {
  pages,
  pageData,
  globalSite,
  globalNavigation,
};
