import { Component } from '@angular/core';
import { TechStackPageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-tech-stack',
    standalone: true,
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss',
    imports: [TechStackPageComponent]
})
export class TechStackComponent {

}
