import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-log-up-reactive",
  templateUrl: "./log-up-reactive.component.html"
})
export class LogUpReactiveComponent {
  public readonly form: FormGroup;

  public get showEmailTakenError(): boolean {
    const { email } = this.form.controls;
    return email && email.hasError("usernameTaken");
  }

  public get showNotEmailError(): boolean {
    const { email } = this.form.controls;
    return email && email.hasError("email");
  }

  public get showPasswordNotEqualError(): boolean {
    const { confirmPassword, password } = this.form.controls;

    if (!confirmPassword || !password) {
      return false;
    }

    return (
      confirmPassword.hasError("passwordNotEqual") &&
      password.dirty &&
      confirmPassword.touched
    );
  }

  public get showRemember(): boolean {
    const { remember } = this.form.controls;
    return remember && remember.value;
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, {
        validators: [Validators.email, Validators.required]
      }),
      password: this.formBuilder.control(null, {
        validators: [Validators.required]
      }),
      confirmPassword: this.formBuilder.control(null),
      remember: this.formBuilder.control(null),
      acceptTerms: this.formBuilder.control(false, {
        validators: [Validators.requiredTrue]
      })
    });
  }

  public onSubmit(form: any): void {
    console.log(this.form);
  }
}
