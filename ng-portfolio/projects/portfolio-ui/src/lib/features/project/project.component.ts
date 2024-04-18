import { Component } from '@angular/core';
import { GitHubProjectContent } from './models/project.interfaces';
import { GitHubProjectContentMocks } from './mocks/project.mocks';

@Component({
  selector: 'portfolio-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  content: GitHubProjectContent[] = GitHubProjectContentMocks;
}
