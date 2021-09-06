import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <app-header></app-header>

  <!-- testing the contact page -->
  <app-contact></app-contact>
  <!-- testing the home page -->
  <app-home></app-home>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'myAngular';
}
