import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageCopySchema = z
  .object({
    title: z.string(),
    layoutTitle: z.string(),
    layoutDescription: z.string().optional(),
  })
  .catchall(z.string());

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const collections = {
  pages: defineCollection({
    loader: glob({ pattern: 'pages/*.md', base: './src/content' }),
    schema: pageCopySchema,
  }),
  site: defineCollection({
    loader: glob({ pattern: 'globals/site.json', base: './src/content' }),
    schema: z.object({
      brandName: z.string(),
      legalName: z.string(),
      description: z.string(),
      phone: z.string(),
      email: z.string().email(),
      social: z.record(z.string(), z.string()).default({}),
      address: z.object({ line1: z.string(), line2: z.string() }),
      header: z.object({ primaryCtaLabel: z.string(), primaryCtaHref: z.string() }),
      footer: z.object({ exploreTitle: z.string(), contactTitle: z.string() }),
    }),
  }),
  navigation: defineCollection({
    loader: glob({ pattern: 'globals/navigation.json', base: './src/content' }),
    schema: z.array(z.object({ name: z.string(), href: z.string() })),
  }),
  homeData: defineCollection({
    loader: glob({ pattern: 'data/home.json', base: './src/content' }),
    schema: z.object({
      routeCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), icon: z.string(), linkLabel: z.string() })),
      trustPoints: z.array(z.object({ title: z.string(), description: z.string() })),
      industries: z.array(z.string()),
      actionCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
    }),
  }),
  aboutData: defineCollection({
    loader: glob({ pattern: 'data/about.json', base: './src/content' }),
    schema: z.object({
      executives: z.array(z.object({ name: z.string(), role: z.string(), vitals: z.string(), bio: z.string() })),
      departmentGroups: z.array(
        z.object({
          department: z.string(),
          leads: z.array(z.object({ name: z.string(), role: z.string(), education: z.string(), expertise: z.string(), deepDive: z.string() })),
        }),
      ),
    }),
  }),
  capabilitiesData: defineCollection({
    loader: glob({ pattern: 'data/capabilities.json', base: './src/content' }),
    schema: z.object({
      serviceLines: z.array(z.object({ id: z.string(), title: z.string(), subtitle: z.string(), description: z.string(), icon: z.string(), services: z.array(z.string()) })),
      orientation: z.object({ title: z.string(), description: z.string(), points: z.array(z.string()) }),
      customerFit: z.object({ title: z.string(), segments: z.array(z.string()) }),
      relatedPathway: z.object({ title: z.string(), description: z.string(), label: z.string(), href: z.string() }),
      instrumentRegistry: z.array(z.object({ category: z.string(), tools: z.array(z.string()) })),
      serviceAssurance: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
    }),
  }),
  contactData: defineCollection({
    loader: glob({ pattern: 'data/contact.json', base: './src/content' }),
    schema: z.object({
      routingSteps: z.array(z.object({ label: z.string(), text: z.string() })),
      pathways: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          email: z.string().email(),
          serviceHref: z.string().optional(),
          serviceLabel: z.string().optional(),
        }),
      ),
      headquarters: z.object({
        addressLines: z.array(z.string()),
        mapUrl: z.string().url(),
        responseNote: z.string(),
      }),
      sampleResources: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
      existingClients: z.object({ title: z.string(), description: z.string(), actions: z.array(linkSchema) }),
    }),
  }),
  productDevelopmentData: defineCollection({
    loader: glob({ pattern: 'data/product-development.json', base: './src/content' }),
    schema: z.object({
      supportAreas: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
      engagementModes: z.array(z.object({ title: z.string(), description: z.string() })),
      lifecycleStages: z.array(z.string()),
      actionCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
    }),
  }),
  qualityData: defineCollection({
    loader: glob({ pattern: 'data/quality.json', base: './src/content' }),
    schema: z.object({
      qseDeepDive: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          subtitle: z.string(),
          icon: z.string(),
          summary: z.string(),
          elements: z.array(z.object({ name: z.string(), implementation: z.string(), deepDive: z.string() })),
        }),
      ),
      qseItems: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
      qualityCommitments: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
    }),
  }),
};

export { collections };
