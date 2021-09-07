import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!--looogo-->
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="assets/img/logo.png">
      </a>
    </div>
  </nav>
  <!-- menu -->
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="contact">Contact</a>
      <a class="navbar-item" routerLink="users">Users</a>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
