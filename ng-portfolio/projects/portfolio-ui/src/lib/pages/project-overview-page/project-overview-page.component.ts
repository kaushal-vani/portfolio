import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrentViewService, CURRENT_VIEW } from 'portfolio-shared/src';

@Component({
  selector: 'portfolio-project-overview',
  templateUrl: './project-overview-page.component.html',
  styleUrls: ['./project-overview-page.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectOverviewComponent implements OnInit, OnDestroy {
  currentView = '';
  CURRENT_VIEW = CURRENT_VIEW;

  constructor(private currentViewService: CurrentViewService) {}

  ngOnInit(): void {
    this.currentView = this.currentViewService.getCurrentView();
    console.log('get', this.currentView);
  }
  ngOnDestroy() {}
}
