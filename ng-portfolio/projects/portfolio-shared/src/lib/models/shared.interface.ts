import { ProjectPhase } from "@portfolio-shared/types/project-phase.types";

export interface Button {
  ariaLabel?: string;
  action: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
}

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
  title?: string;
}

export interface SocialMedia {
  alt: string;
  description?: string;
  link: string;
  src: string;
}
export interface Badge {
  class: string;
  content: ProjectPhase;
}
