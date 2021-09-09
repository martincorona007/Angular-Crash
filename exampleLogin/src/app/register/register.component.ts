import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = "";
  password: string = "";
  confirmPassword : string = "";
  passwordError: boolean = true;
  constructor(public userService: UsersService, public router: Router) { }
  register(){
    const user = {email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    })
  }
  ngOnInit(): void {
  }

}
