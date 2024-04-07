import { Component } from '@angular/core';
import { ContactPageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactPageComponent]
})
export class ContactComponent {

}
