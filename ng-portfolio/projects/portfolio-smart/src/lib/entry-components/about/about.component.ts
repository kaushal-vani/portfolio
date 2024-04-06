import { Component } from '@angular/core';
import { AboutPageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [AboutPageComponent]
})
export class AboutComponent {

}
