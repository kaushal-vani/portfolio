import { Component } from '@angular/core';
import { TechStackContentMocks } from './mocks/tech-stack-page.mocks';
import { TechStackContent } from './models/tech-stack-page.interface';
import { CardComponent } from 'portfolio-shared/src';
import { LogoCarouselComponent } from 'portfolio-ui/src';

@Component({
  selector: 'portfolio-tech-stack-page',
  standalone: true,
  templateUrl: './tech-stack-page.component.html',
  styleUrl: './tech-stack-page.component.scss',
  imports: [CardComponent, LogoCarouselComponent],
})
export class TechStackPageComponent {
  content = TechStackContentMocks as TechStackContent;
}
