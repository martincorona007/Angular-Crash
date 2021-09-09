import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.email);
    console.log(this.password);
  }

}
