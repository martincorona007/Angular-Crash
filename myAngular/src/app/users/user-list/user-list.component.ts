import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  template: `
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-4" *ngFor="let user of users | async">
          <div class="card">
            <div class="card-content">
              <a routerLink="/users/{{user.login}}">{{user.login}}</a>
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
export class UserListComponent implements OnInit {
  users: Observable<Object> | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void{
    this.users = this.userService.getUsers();
  }

}
