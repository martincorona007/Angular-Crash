import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login-reactive",
  templateUrl: "./login-reactive.component.html"
})
export class LoginReactiveComponent {
  public readonly form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, {
        validators: [Validators.email, Validators.required]
      }),
      password: this.formBuilder.control(null, {
        validators: [Validators.required]
      }),
      remember: this.formBuilder.control(null)
    });
  }

  public onSubmit(): void {
    console.log(this.form);
  }
}
