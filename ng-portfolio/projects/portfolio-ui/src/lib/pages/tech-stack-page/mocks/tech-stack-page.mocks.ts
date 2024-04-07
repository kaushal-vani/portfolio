import { Card } from 'portfolio-shared/src';
import { TechStackContent } from '../models/tech-stack-page.interface';

const TechStackMocks: Card[] = [
  {
    alt: 'Angular Card Logo',
    description: '',
    meta: 'TypeScript-based open-source web application framework',
    src: 'assets/Tech-Stack/angular.svg',
    title: 'Angular',
  },
  {
    alt: 'Scss Card Logo',
    description: '',
    meta: 'Stylesheet Enhancement',
    src: 'assets/Tech-Stack/scss.svg',
    title: 'Scss',
  },
  {
    alt: 'HTML',
    description: '',
    meta: 'Web Markup Language',
    src: 'assets/Tech-Stack/html.svg',
    title: 'HTML',
  },
  {
    alt: 'GitHub Card Logo',
    description: '',
    meta: 'Collaborative Version Control',
    src: 'assets/Tech-Stack/github.svg',
    title: 'GitHub',
  },
  {
    alt: 'Jest Card Logo',
    description: '',
    meta: 'JavaScript Testing',
    src: 'assets/Tech-Stack/jest.svg',
    title: 'Jest',
  },
  {
    alt: 'Ngrx Card Logo',
    description: '',
    meta: 'Angular State Management.',
    src: 'assets/Tech-Stack/ngrx.svg',
    title: 'Ngrx',
  },
  {
    alt: 'Rxjs Card Logo',
    description: '',
    meta: 'Reactive Programming',
    src: 'assets/Tech-Stack/rxjs.svg',
    title: 'Rxjs',
  },
  {
    alt: 'Storybook Card Logo',
    description: '',
    meta: 'Component Development & Documentation.',
    src: 'assets/Tech-Stack/storybook.svg',
    title: 'Storybook',
  },
  {
    alt: 'Typescript Card Logo',
    description: '',
    meta: 'Static Typing',
    src: 'assets/Tech-Stack/typescript.svg',
    title: 'Typescript',
  },
];

const TitleMocks: string = "Tech Stack"

const TechStackContentMocks: TechStackContent = {
  title: TitleMocks,
  techStack: TechStackMocks,
};

export { TechStackContentMocks };
