import { TestBed } from '@angular/core/testing';

import { DownloadResumeService } from './download-resume.service';

describe('DownloadResumeService', () => {
  let service: DownloadResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
