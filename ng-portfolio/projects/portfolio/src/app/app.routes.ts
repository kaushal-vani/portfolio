import { Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  DisplayComponent,
  HomeComponent,
  TechStackComponent,
} from 'portfolio-smart/src';
import { ProjectOverviewComponent } from 'portfolio-ui/src';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-me',
    component: ContactComponent,
  },
  {
    path: 'projects',
    component: DisplayComponent,
  },
  {
    path: 'projects/show-spot',
    component: ProjectOverviewComponent,
  },
  {
    path: 'projects/task-tree',
    component: ProjectOverviewComponent,
  },
  {
    path: 'projects/ui-library',
    component: ProjectOverviewComponent,
  },
  {
    path: 'tech-stack',
    component: TechStackComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
