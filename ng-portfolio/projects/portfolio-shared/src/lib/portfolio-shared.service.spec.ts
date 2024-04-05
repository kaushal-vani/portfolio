import { TestBed } from '@angular/core/testing';

import { PortfolioSharedService } from './portfolio-shared.service';

describe('PortfolioSharedService', () => {
  let service: PortfolioSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
