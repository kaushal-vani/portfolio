import { Component } from '@angular/core';
import { DisplayPageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-display',
    standalone: true,
    templateUrl: './display.component.html',
    styleUrl: './display.component.scss',
    imports: [DisplayPageComponent]
})
export class DisplayComponent {

}
