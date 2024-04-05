import { TestBed } from '@angular/core/testing';

import { PortfolioUiService } from './portfolio-ui.service';

describe('PortfolioUiService', () => {
  let service: PortfolioUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
