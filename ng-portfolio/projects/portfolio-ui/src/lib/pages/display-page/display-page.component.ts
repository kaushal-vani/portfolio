import { Component } from '@angular/core';
import { ProjectContent } from './models/display-page.interface';
import { ProjectContentMock } from './mocks/display-page.mocks';

@Component({
  selector: 'portfolio-display-page',
  standalone: true,
  imports: [],
  templateUrl: './display-page.component.html',
  styleUrl: './display-page.component.scss',
})
export class DisplayPageComponent {
  content: ProjectContent = ProjectContentMock;
}
