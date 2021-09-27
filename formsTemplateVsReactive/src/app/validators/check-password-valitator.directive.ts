import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  FormGroup
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

/**
 * This is a very basic implementation of this. You can find a slightly better one in:
 * https://stackblitz.com/edit/angular-check-passwords-validator
 */
@Directive({
  selector: "form[checkPassword]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordValidatorDirective,
      multi: true
    }
  ]
})
export class CheckPasswordValidatorDirective implements Validator {
  public validate(form: FormGroup): null {
    const { password, confirmPassword } = form.controls;

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordNotEqual: true });
    }

    return null;
  }
}
