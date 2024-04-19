import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentViewService {
  public currentView: string = '';

  constructor() {}

  setCurrentView(view: string) {
    this.currentView = view;
  }

  getCurrentView() {
    return this.currentView;
  }
}
