import { LogoCarouselContent } from '../models/logo-carousel.interface';
import { Logo } from 'portfolio-shared/src';

const LogoMocks: Logo[] = [
  {
    alt: 'angular',
    src: 'assets/Carousel/angular.svg',
    title: 'Angular',
  },
  {
    alt: 'bootstrap',
    src: 'assets/Carousel/bootstrap.svg',
    title: 'Bootstrap',
  },
  {
    alt: 'css',
    src: 'assets/Carousel/css.svg',
    title: 'Css',
  },
  {
    alt: 'eslint',
    src: 'assets/Carousel/eslint.svg',
    title: 'Eslint',
  },
  {
    alt: 'github',
    src: 'assets/Carousel/github.svg',
    title: 'Github',
  },
  {
    alt: 'graphql',
    src: 'assets/Carousel/graphql.svg',
    title: 'Graphql',
  },
  {
    alt: 'html',
    src: 'assets/Carousel/html.svg',
    title: 'Html5',
  },
  {
    alt: 'ionic',
    src: 'assets/Carousel/ionic.svg',
    title: 'Ionic',
  },
  {
    alt: 'javascript',
    src: 'assets/Carousel/javascript.svg',
    title: 'Javascript',
  },
  {
    alt: 'jenkins',
    src: 'assets/Carousel/jenkins.svg',
    title: 'Jenkins',
  },
  {
    alt: 'json',
    src: 'assets/Carousel/json.svg',
    title: 'JSON',
  },
  {
    alt: 'npm',
    src: 'assets/Carousel/npm.svg',
    title: 'NPM',
  },
  {
    alt: 'postman',
    src: 'assets/Carousel/postman.svg',
    title: 'Postman',
  },
  {
    alt: 'powershell',
    src: 'assets/Carousel/powershell.svg',
    title: 'Powershell',
  },
  {
    alt: 'stackoverflow',
    src: 'assets/Carousel/stackoverflow.svg',
    title: 'Stackoverflow',
  },
  {
    alt: 'storybook',
    src: 'assets/Carousel/storybook.svg',
    title: 'Storybook',
  },
  {
    alt: 'svg',
    src: 'assets/Carousel/svg.svg',
    title: 'svg',
  },
  {
    alt: 'typescript',
    src: 'assets/Carousel/typescript.svg',
    title: 'Typescript',
  },
  {
    alt: 'udemy',
    src: 'assets/Carousel/udemy.svg',
    title: 'Udemy',
  },
  {
    alt: 'v8',
    src: 'assets/Carousel/v8.svg',
    title: 'V8',
  },
  {
    alt: 'vscode',
    src: 'assets/Carousel/vscode.svg',
    title: 'VSCode',
  },
  {
    alt: 'yarn',
    src: 'assets/Carousel/yarn.svg',
    title: 'Yarn',
  },
];

const TitleMocks: string = ' Projects developed using';

export const LogoCarouselContentMocks: LogoCarouselContent = {
  title: TitleMocks,
  logo: LogoMocks,
};
