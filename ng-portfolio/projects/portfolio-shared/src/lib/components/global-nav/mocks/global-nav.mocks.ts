import { Link, Logo } from 'portfolio-shared/src';
import { GlobalNavContent } from '../models/global-nav.interface';


const HeaderMocks: string = 'Kaushal.dev';

const LogoMocks: Logo = {
  src: 'assets/GIF/kode.gif',
  alt: 'kode gif',
  link: '/home',
};

const LinkMocks: Link[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Tech Stack',
    link: '/tech-stack',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Contact Me',
    link: '/contact-me',
  },
];

const GlobalNavContentMocks: GlobalNavContent = {
  header: HeaderMocks,
  link: LinkMocks,
  logo: LogoMocks,
};

export { GlobalNavContentMocks };
