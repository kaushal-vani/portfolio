import { Component } from '@angular/core';
import { CardComponent } from 'portfolio-shared/src';

@Component({
  selector: 'portfolio-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [CardComponent],
})
export class AboutPageComponent {

}
