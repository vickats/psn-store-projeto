import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu-bar></app-menu-bar>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
}
