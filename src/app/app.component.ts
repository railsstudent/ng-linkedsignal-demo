import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { navLinks } from './app.routes';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
    template: `
    <h2>Version: {{ version }}</h2>
    <app-navbar [navLinks]="navLinks" />
    <router-outlet />
  `
})
export class AppComponent {
  version = VERSION.full;
  navLinks = navLinks;

  constructor(titleService: Title) {
    titleService.setTitle('LinkSignal Demo');
  }
}
