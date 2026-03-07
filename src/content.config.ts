import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    layoutTitle: z.string(),
    layoutDescription: z.string().optional(),
    heroEyebrow: z.string(),
    heroTitle: z.string(),
    heroLead: z.string(),
    heroMediaTitle: z.string().optional(),
    heroMediaText: z.string().optional(),
    routesTitle: z.string().optional(),
    routesLead: z.string().optional(),
    trustTitle: z.string().optional(),
    trustLead: z.string().optional(),
    scopeTitle: z.string().optional(),
    scopeLead: z.string().optional(),
    actionsTitle: z.string().optional(),
    actionsLead: z.string().optional(),
    overviewEyebrow: z.string().optional(),
    overviewTitle: z.string().optional(),
    overviewLead: z.string().optional(),
    registryEyebrow: z.string().optional(),
    registryTitle: z.string().optional(),
    customerFitEyebrow: z.string().optional(),
    customerFitTitle: z.string().optional(),
    relatedPathwayEyebrow: z.string().optional(),
    sectionQuickLinksTitle: z.string().optional(),
    sectionSystemTitle: z.string().optional(),
    sectionSystemEyebrow: z.string().optional(),
    executiveSectionEyebrow: z.string().optional(),
    executiveSectionTitle: z.string().optional(),
    departmentSectionEyebrow: z.string().optional(),
    departmentSectionTitle: z.string().optional(),
    routingTitle: z.string().optional(),
    directoryTitle: z.string().optional(),
    headquartersTitle: z.string().optional(),
    sampleResourcesTitle: z.string().optional(),
    areasTitle: z.string().optional(),
    areasLead: z.string().optional(),
    fitTitle: z.string().optional(),
    fitLead: z.string().optional(),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaPrimaryLabel: z.string().optional(),
    ctaPrimaryHref: z.string().optional(),
    ctaSecondaryLabel: z.string().optional(),
    ctaSecondaryHref: z.string().optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.json', base: './src/content/globals' }),
  schema: z.object({
    brandName: z.string(),
    legalName: z.string(),
    description: z.string(),
    phone: z.string(),
    email: z.string().email(),
    social: z.record(z.string(), z.string()).default({}),
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

const navigation = defineCollection({
  loader: glob({ pattern: 'navigation.json', base: './src/content/globals' }),
  schema: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    }),
  ),
});

const homeData = defineCollection({
  loader: glob({ pattern: 'home.json', base: './src/content/data' }),
  schema: z.object({
    routeCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), icon: z.string(), linkLabel: z.string() })),
    trustPoints: z.array(z.object({ title: z.string(), description: z.string() })),
    industries: z.array(z.string()),
    actionCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
  }),
});

const aboutData = defineCollection({
  loader: glob({ pattern: 'about.json', base: './src/content/data' }),
  schema: z.object({
    executives: z.array(z.object({ name: z.string(), role: z.string(), vitals: z.string(), bio: z.string() })),
    departmentGroups: z.array(
      z.object({
        department: z.string(),
        leads: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
            education: z.string(),
            expertise: z.string(),
            deepDive: z.string(),
          }),
        ),
      }),
    ),
  }),
});

const capabilitiesData = defineCollection({
  loader: glob({ pattern: 'capabilities.json', base: './src/content/data' }),
  schema: z.object({
    orientation: z.object({ title: z.string(), description: z.string(), points: z.array(z.string()) }),
    serviceLines: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        icon: z.string(),
        services: z.array(z.string()),
      }),
    ),
    customerFit: z.object({ title: z.string(), segments: z.array(z.string()) }),
    serviceAssurance: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
    instrumentRegistry: z.array(z.object({ category: z.string(), tools: z.array(z.string()) })),
    relatedPathway: z.object({ title: z.string(), description: z.string(), label: z.string(), href: z.string() }),
  }),
});

const productDevelopmentData = defineCollection({
  loader: glob({ pattern: 'product-development.json', base: './src/content/data' }),
  schema: z.object({
    supportAreas: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })),
    engagementModes: z.array(z.object({ title: z.string(), description: z.string() })),
    lifecycleStages: z.array(z.string()),
    actionCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
  }),
});

const qualityData = defineCollection({
  loader: glob({ pattern: 'quality.json', base: './src/content/data' }),
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
});

const contactData = defineCollection({
  loader: glob({ pattern: 'contact.json', base: './src/content/data' }),
  schema: z.object({
    routingSteps: z.array(z.object({ label: z.string(), text: z.string() })),
    pathways: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        email: z.string().email(),
        serviceHref: z.string(),
        serviceLabel: z.string(),
      }),
    ),
    headquarters: z.object({ addressLines: z.array(z.string()), mapUrl: z.string(), responseNote: z.string() }),
    sampleResources: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), label: z.string() })),
    existingClients: z.object({
      title: z.string(),
      description: z.string(),
      actions: z.array(z.object({ label: z.string(), href: z.string() })),
    }),
  }),
});

export const collections = {
  pages,
  site,
  navigation,
  homeData,
  aboutData,
  capabilitiesData,
  productDevelopmentData,
  qualityData,
  contactData,
};
