import { TestBed } from '@angular/core/testing';

import { PortfolioSmartService } from './portfolio-smart.service';

describe('PortfolioSmartService', () => {
  let service: PortfolioSmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioSmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
