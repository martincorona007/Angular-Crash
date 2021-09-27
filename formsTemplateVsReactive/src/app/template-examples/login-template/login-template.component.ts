import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-template",
  templateUrl: "./login-template.component.html"
})
export class LoginTemplateComponent {
  public onSubmit(form: any): void {
    console.log(form);
  }
}
