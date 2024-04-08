import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = 'assets/Resume/Kaushal_Resume.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;

    // Set the download attribute and filename
    link.download = 'kaushal-resume.pdf';

    // Trigger the download by clicking the anchor element programmatically
    document.body.appendChild(link);
    link.click();

    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
  }

}
