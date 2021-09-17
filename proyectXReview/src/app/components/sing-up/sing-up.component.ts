import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Users } from 'model-Users';
import { SignUpService } from 'src/app/services/sign-up.service';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  users: Users[] = [];
  userName: string = '';
  email: string = '';
  password : string = '';
  @Output() agregar: EventEmitter<Users> = new EventEmitter();
  constructor(private userService: SignUpService) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    const newUser = {
      userName: this.userName,
      email: this.email,
      password: this.password
      
    }
    this.addUsersToApp(newUser);
    this.userName = '';
    this.email = '';
    this.password = '';
  }

  addUsersToApp(user: Users){
    this.userService.addUsers(user).subscribe(
      (user) => (this.users.push(user))
      );
    
  }


}
