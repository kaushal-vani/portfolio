import { Component } from '@angular/core';
import { ContactMeContent } from './models/contact-me.interface';
import { ContactMeMocks } from './mocks/contact-me.mocks';
import { EmailFormComponent } from 'portfolio-shared/src';

@Component({
    selector: 'portfolio-contact-me',
    standalone: true,
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss',
    imports: [EmailFormComponent]
})
export class ContactMeComponent {
  content: ContactMeContent = ContactMeMocks;
  email: string = 'kaushal2469@gmail.com';
  gitHub_Url: string = 'https://github.com/kaushal-vani';
  linkedIn_Url: string = 'https://www.linkedin.com/in/kaushal-vani/';
  showEmailForm: boolean = false;

  getGmailContent(): string {
    return `
      You can reach me via email at
      <a href="mailto:${this.email}">${this.email}</a>. I strive
      to respond to all emails promptly, so expect to hear back
      soon.
    `;
  }

  getGithubContent(): string {
    return `
      Explore my projects and repositories on GitHub. I am currently
      working on a new NPM package and Ionic application. You
      can view my GitHub profile
      <a href="${this.gitHub_Url}">here</a>.
    `;
  }

  getLinkedInContent(): string {
    return `
      Connect with me on LinkedIn for professional networking, updates,
      and discussions. You can find my LinkedIn profile
      <a href="${this.linkedIn_Url}">here</a>.
    `;
  }
}
