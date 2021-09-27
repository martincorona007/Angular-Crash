import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-log-up-template",
  templateUrl: "./log-up-template.component.html"
})
export class LogUpTemplateComponent {
  public onSubmit(form: any): void {
    console.log(form);
  }

  public showPasswordNotEqualError(form: any): boolean {
    const confirmPassword = form.control.get("confirmPassword");
    const password = form.control.get("password");

    if (!confirmPassword || !password) {
      return false;
    }

    return (
      confirmPassword.hasError("passwordNotEqual") &&
      password.dirty &&
      confirmPassword.touched
    );
  }
}
