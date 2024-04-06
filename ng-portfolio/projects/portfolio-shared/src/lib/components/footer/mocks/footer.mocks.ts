import { Logo, SocialMedia } from 'portfolio-shared/src';
import { FooterContent } from '../models/footer.interface';

const FooterMocks: string = "© 2024 Kaushal's Portfolio";

const LogoMocks: Logo = {
  alt: 'PortFolio Logo',
  link: '/home',
  src: 'assets/icon-kit/folder.svg',
};

const SocialMediaMocks: SocialMedia[] = [
  {
    alt: 'LinkedIn',
    description: 'Professional network',
    link: 'https://www.linkedin.com/in/kaushal-vani/',
    src: 'assets/Tech-Stack/linkedin.svg',
  },
  {
    alt: 'GitHub',
    description: 'Professional network',
    link: 'https://github.com/kaushal-vani',
    src: 'assets/Tech-Stack/github.svg',
  },
];

const FooterContentMock: FooterContent = {
  footer: FooterMocks,
  logo: LogoMocks,
  socialMedia: SocialMediaMocks,
};

export { FooterContentMock };
