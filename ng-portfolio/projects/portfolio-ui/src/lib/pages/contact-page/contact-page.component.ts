import { Component } from '@angular/core';
import { ContactMeComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-contact-page',
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss',
    imports: [ContactMeComponent]
})
export class ContactPageComponent {

}
