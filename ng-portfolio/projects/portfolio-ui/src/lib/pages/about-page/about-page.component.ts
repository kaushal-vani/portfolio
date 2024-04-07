import { Component } from '@angular/core';
import { CardComponent } from 'portfolio-shared/src';
import { AboutPageContentMock } from './mocks/about-page.mocks';
import { AboutPageContent } from './models/about-page.interface';

@Component({
  selector: 'portfolio-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [CardComponent],
})
export class AboutPageComponent {
  content: AboutPageContent = AboutPageContentMock

}
