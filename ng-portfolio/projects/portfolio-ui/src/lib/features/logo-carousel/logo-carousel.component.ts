import { Component } from '@angular/core';
import { LogoCarouselContentMocks } from './mocks/logo-carousel.mocks';
import { LogoCarouselContent } from './models/logo-carousel.interface';

@Component({
  selector: 'portfolio-logo-carousel',
  standalone: true,
  imports: [],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.scss'
})
export class LogoCarouselComponent {
content : LogoCarouselContent = LogoCarouselContentMocks
}
