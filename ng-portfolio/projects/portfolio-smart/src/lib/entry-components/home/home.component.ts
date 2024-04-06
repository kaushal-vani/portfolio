import { Component } from '@angular/core';
import { HomePageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HomePageComponent]
})
export class HomeComponent {

}
