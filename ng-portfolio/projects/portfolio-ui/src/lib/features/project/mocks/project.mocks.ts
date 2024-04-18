import { GitHubProjectContent } from '../models/project.interfaces';

export const GitHubProjectContentMocks: GitHubProjectContent[] = [
  {
    title: 'Show Spot',
    description: `A one-stop destination for film lovers. Browse a vast selection of
    titles, check reviews, and create your personalized watchlist
    effortlessly. Streamline your movie-watching experience with us.`,
    image: {
      alt: 'show-spot',
      src: 'assets/icon-kit/show-spot.svg',
    },
    button: {
      action: 'Explore Show Spot',
      link: 'projects/show-spot',
    },
    badge: {
      class: 'badge bg-success',
      content: 'Under-Development',
    },
  },
  {
    title: 'Task Tree',
    description: `All-in-one task manager seamlessly integrated with your calendar. Set deadlines, prioritize tasks, and opt for email reminders, ensuring you stay on top of your schedule with ease.`,
    image: {
      alt: 'task-tree',
      src: 'assets/icon-kit/task-tree.svg',
    },
    button: {
      action: 'Explore Task Tree',
      link: 'projects/task-tree',
    },
    badge: {
      class: 'badge bg-warning text-black-50',
      content: 'On-Standby',
    },
  },
  {
    title: 'Ui Library',
    description: `Introducing an innovative Angular UI component library, offering reusable and customizable elements for seamless web development, set to be available on NPM after development.`,
    image: {
      alt: 'ui-library',
      src: 'assets/icon-kit/ui-library.svg',
    },
    button: {
      action: 'Explore Ui Library',
      link: 'projects/ui-library',
    },
    badge: {
      class: 'badge bg-secondary ',
      content: 'Pre-Development',
    },
  },
];
