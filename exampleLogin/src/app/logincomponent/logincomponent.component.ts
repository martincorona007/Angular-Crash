import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(public userService: UsersService,public router: Router) { }

  ngOnInit(): void {
  }
  login(){
    const user = {email: this.email,password: this.password};
    this.userService.login(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {//bugs in the API
      console.log(error);
    });

  }

}
