import { Button } from 'portfolio-shared/src';
import { ProjectContent } from '../models/display-page.interface';

const HeaderMocks: string = `Projects`;

const DescriptionMocks: string = `As a front-end developer proficient in Angular, HTML, CSS, and
JavaScript, I specialize in crafting dynamic and responsive web
interfaces. With a focus on user experience and performance
optimization, I've contributed to multiple projects, delivering
intuitive and visually appealing solutions. Explore my projects below to
see my work firsthand!`;

const GitButtonMock: Button = {
  ariaLabel: 'Button to view GitHub',
  action: 'View on GitHub',
  imageSrc: 'assets/icon-kit/github-white.svg',
  imageAlt: 'GitHub Icon',
  link: 'https://github.com/kaushal-vani',
};

export const ProjectContentMock: ProjectContent = {
  header: HeaderMocks,
  description: DescriptionMocks,
  gitButton: GitButtonMock,
};
