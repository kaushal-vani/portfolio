import { Component } from '@angular/core';
import { GitHubProjectContent } from './models/project.interfaces';
import { GitHubProjectContentMocks } from './mocks/project.mocks';
import { CURRENT_VIEW, CurrentViewService } from 'portfolio-shared/src';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  constructor(
    private router: Router,
    private currentViewService: CurrentViewService
  ) {}
  content: GitHubProjectContent[] = GitHubProjectContentMocks;
  currentView = CURRENT_VIEW.NONE;

  setStorage(view: string) {
    this.currentViewService.setCurrentView(view);
    console.log('get', view);
    this.router.navigate([`projects/${view}`]);
  }
}
