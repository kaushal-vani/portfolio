import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare const bootstrap: any;
import { DownloadResumeService } from '@portfolio-shared/services/download-resume.service';
import { HeroBannerContent } from './models/hero-banner.interfaces';
import { HeroBannerContentMocks } from './mocks/hero-banner.mocks';

@Component({
  selector: 'portfolio-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent implements AfterViewInit {
  content: HeroBannerContent = HeroBannerContentMocks;
  constructor(
    private downloadResumeService: DownloadResumeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  resumeDownload() {
    this.downloadResumeService.downloadResume();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const toastTrigger = document.getElementById('liveToastBtn');
      const toastLiveExample = document.getElementById('liveToast');

      if (toastTrigger) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show();
        });
      }
    }
  }
}
