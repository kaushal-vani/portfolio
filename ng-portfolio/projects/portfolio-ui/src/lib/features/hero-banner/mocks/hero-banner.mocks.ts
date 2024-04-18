import { HeroBannerContent } from '../models/hero-banner.interfaces';

export const HeroBannerContentMocks: HeroBannerContent = {
  title: `I am Kaushal`,
  description: `I'm a passionate front-end developer dedicated to creating immersive
    digital experiences. With a blend of creativity and technical expertise,
    I bring ideas to life through captivating user interfaces and seamless
    interactions.`,
  heroBannerImage: {
    alt: 'Coding',
    src: 'assets/Logo/coding.svg',
  },
  downloadButton: {
    ariaLabel: 'Download Resume',
    action: 'Download Resume',
    imageSrc: 'assets/icon-kit/download.svg',
    imageAlt: 'download',
  },
  toast: {
    alt: 'assets/icon-kit/check-success.svg',
    description: 'Resume downloaded successfully',
    meta: 'Just Now',
    src: 'assets/icon-kit/folder.svg',
    title: 'Kaushal.dev',
  },
};
