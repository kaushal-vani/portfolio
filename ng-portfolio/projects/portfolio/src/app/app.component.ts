import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, GlobalNavComponent } from 'portfolio-shared/src';
import { HomeComponent } from 'portfolio-smart/src';

@Component({
    selector: 'portfolio-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, GlobalNavComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio';
}
