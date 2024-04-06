import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() meta: string = '';
}