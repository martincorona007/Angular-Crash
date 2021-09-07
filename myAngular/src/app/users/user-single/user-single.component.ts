import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `

  <section class="section">
  <div class="container">
  <div class="columns is-multiline">
    <!-- loop over our users and give them each a card -->
    <div class="column is-4" *ngFor="let user of users | async">
      <div class="card">
        <div class="card-content">
          <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
        </div>      
      </div>      
    </div>
  </div>
  </div>
  </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  user : any;
  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user)
  })
  }

}
