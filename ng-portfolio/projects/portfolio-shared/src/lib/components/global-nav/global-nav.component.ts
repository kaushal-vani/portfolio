import { Component } from '@angular/core';
import { GlobalNavContent } from './models/global-nav.interface';
import { GlobalNavContentMocks } from './mocks/global-nav.mocks';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-global-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './global-nav.component.html',
  styleUrl: './global-nav.component.scss'
})
export class GlobalNavComponent {
  content = GlobalNavContentMocks as GlobalNavContent

}
