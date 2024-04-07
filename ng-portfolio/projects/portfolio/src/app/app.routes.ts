import { Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  DisplayComponent,
  HomeComponent,
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
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: 'contact-me',
    component: ContactComponent,
  },
  {
    path: 'projects',
    component: DisplayComponent,
  },{
  path: 'tech-stack',
  component: DisplayComponent,
},
  {
    path: '**',
    component: HomeComponent,
  },
];
