import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { debounceTime, delay, map } from "rxjs/operators";

@Injectable()
export class CheckUsernameService {
  checkUsername(username: any) {
    return of(username).pipe(
      delay(500),
      map((username = "") => {
        return {
          usernameTaken: !!Math.round(Math.random())
        };
      })
    );
  }
}
