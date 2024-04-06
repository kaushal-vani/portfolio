import { Component } from '@angular/core';
import { DisplayPageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-display',
    standalone: true,
    templateUrl: './display.component.html',
    styleUrl: './display.component.css',
    imports: [DisplayPageComponent]
})
export class DisplayComponent {

}
