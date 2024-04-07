import { AboutPageContent, Card } from '../models/about-page.interface';

export const CardMocks: Card[] = [
  {
    title: 'Passionate Developer',
    text: `I'm a front-end developer who loves creating engaging digital experiences. Using my mix of creativity and tech skills, I bring ideas to life with captivating designs and smooth interactions.`,
    src: 'assets/icon-kit/circle-code.svg',
  },
  {
    title: 'Code Integrity',
    text: `I ensure code quality by following best practices and standards.
    Clean and semantic markup, along with well-structured code, are my
    priorities to create maintainable and scalable projects`,
    src: 'assets/icon-kit/circle-star.svg',
  },
  {
    title: 'Accessibility Advocate',
    text: `I prioritize accessibility to ensure inclusivity and usability for
    all users. By adhering to accessibility standards, I aim to make
    digital experiences accessible to everyone, regardless of their
    abilities.`,
    src: 'assets/icon-kit/accessibility.svg',
  },
];

const TitleMocks: string = 'About Me';

export const AboutPageContentMock: AboutPageContent = {
  title: TitleMocks,
  card: CardMocks,
};
