import { Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  DisplayComponent,
  HomeComponent,
  TechStackComponent,
} from 'portfolio-smart/src';

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
    component: DisplayComponent,
  },
  {
    path: 'projects/task-tree',
    component: DisplayComponent,
  },
  {
    path: 'projects/ui-library',
    component: DisplayComponent,
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
