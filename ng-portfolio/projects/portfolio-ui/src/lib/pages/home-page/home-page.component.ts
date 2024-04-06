import { Component } from '@angular/core';
import { HeroBannerComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HeroBannerComponent]
})
export class HomePageComponent {

}
