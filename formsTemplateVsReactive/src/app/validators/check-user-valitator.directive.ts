import { Directive, Input } from "@angular/core";
import {
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  Validator,
  FormControl
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CheckUsernameService } from "./../services/check-username.service";

@Directive({
  selector: "[checkUser]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckUserValidatorDirective,
      multi: true
    }
  ]
})
export class CheckUserValidatorDirective implements Validator {
  constructor(private readonly checkUsernameService: CheckUsernameService) {}

  public validate(form: FormControl): Observable<ValidationErrors | null> {
    return this.checkUsernameService
      .checkUsername(form.value)
      .pipe(map(value => (value.usernameTaken ? value : null)));
  }
}
