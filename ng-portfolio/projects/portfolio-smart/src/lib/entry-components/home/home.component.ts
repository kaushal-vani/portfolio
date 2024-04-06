import { Component } from '@angular/core';
import { HomeSkeletonLoaderComponent } from 'portfolio-shared/src';
import { HomePageComponent } from 'portfolio-ui/src';

@Component({
    selector: 'portfolio-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomePageComponent, HomeSkeletonLoaderComponent]
})
export class HomeComponent {

}
