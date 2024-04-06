import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'portfolio-home-skeleton-loader',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './home-skeleton-loader.component.html',
  styleUrl: './home-skeleton-loader.component.scss'
})
export class HomeSkeletonLoaderComponent {

}
