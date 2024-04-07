import { Component } from '@angular/core';
import { ProjectContent } from './models/display-page.interface';
import { ProjectContentMock } from './mocks/display-page.mocks';
import { LogoCarouselComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-display-page',
    standalone: true,
    templateUrl: './display-page.component.html',
    styleUrl: './display-page.component.scss',
    imports: [LogoCarouselComponent]
})
export class DisplayPageComponent {
  content: ProjectContent = ProjectContentMock;
}
