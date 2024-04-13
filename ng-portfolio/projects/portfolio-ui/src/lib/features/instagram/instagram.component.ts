import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InstagramService } from 'portfolio-shared/src';

@Component({
  selector: 'portfolio-instagram',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgxSkeletonLoaderModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss',
})
export class InstagramComponent implements OnInit {
  instagramFeed: any[] = [];

  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.fetchInstagramFeed();
  }

  fetchInstagramFeed() {
    this.instagramService.getInstagramFeed().subscribe({
      next: (data) => {
        this.instagramFeed = data.data.slice(0, 3);
      },
      error: (error) => {
        console.error('Error fetching Instagram feed:', error);
      },
    });
  }
}
