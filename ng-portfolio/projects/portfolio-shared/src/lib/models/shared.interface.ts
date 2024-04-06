export interface Card {
  alt: string;
  description: string;
  meta: string;
  src: string;
  title: string;
}

export interface Link {
  link: string;
  title: string;
}

export interface Logo {
  alt: string;
  link?: string;
  src: string;
}

export interface SocialMedia {
  alt: string;
  description?: string;
  link: string;
  src: string;
}
