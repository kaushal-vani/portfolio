import { TestBed } from '@angular/core/testing';

import { CurrentViewService } from './current-view.service';

describe('CurrentViewService', () => {
  let service: CurrentViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
