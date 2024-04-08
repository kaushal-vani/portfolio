import { Component } from '@angular/core';
import { DownloadResumeService } from '@portfolio-shared/services/download-resume.service';

@Component({
  selector: 'portfolio-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {

  constructor(private downloadResumeService: DownloadResumeService){}

  resumeDownload(){
    this.downloadResumeService.downloadResume()
  }

}
