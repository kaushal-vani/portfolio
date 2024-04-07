import { SocialMedia } from 'portfolio-shared/src';
import { ContactMeContent } from '../models/contact-me.interface';

const HeaderMocks: string = `Contact Me`;

const DescriptionMocks: string = `Thank you for your interest in reaching out to me. Whether you have a
  question, a project proposal, or just want to say hello, I'd love to hear
  from you. Please feel free to use any of the methods below to get in touch:`;

const GmailMocks: SocialMedia = {
  alt: 'Gmail',
  description: 'Professional network',
  link: 'kaushal2469@gmail.com',
  src: 'assets/Tech-Stack/gmail.svg',
};
const LinkedInMocks: SocialMedia = {
  alt: 'LinkedIn',
  description: 'Professional network',
  link: 'https://www.linkedin.com/in/kaushal-vani/',
  src: 'assets/Tech-Stack/linkedin.svg',
};
const GitHubMocks: SocialMedia = {
  alt: 'GitHub',
  description: 'Professional network',
  link: 'https://github.com/kaushal-vani',
  src: 'assets/Tech-Stack/github.svg',
};

export const ContactMeMocks: ContactMeContent = {
  header: HeaderMocks,
  description: DescriptionMocks,
  gmail: GmailMocks,
  gitHub: GitHubMocks,
  linkedIn: LinkedInMocks,
};
