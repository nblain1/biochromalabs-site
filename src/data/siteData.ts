export interface SocialLink {
  name: string;
  label: string;
  icon: string;
}

// Compatibility shim: active UI currently renders no social links.
export const socialLinks: SocialLink[] = [];
