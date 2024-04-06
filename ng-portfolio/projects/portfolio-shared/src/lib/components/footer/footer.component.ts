import { Component } from '@angular/core';
import { FooterContent } from './models/footer.interface';
import { FooterContentMock } from './mocks/footer.mocks';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  content = FooterContentMock as FooterContent
}
