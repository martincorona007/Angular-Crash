import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SelectExamplesComponent } from "./select-examples/select-examples.component";
import { SelectTemplateExampleComponent } from "./template-examples/select-template-example/select-template-example.component";
import { LoginTemplateComponent } from "./template-examples/login-template/login-template.component";
import { FormStatusComponent } from "./form-status/form-status.component";

import { CheckUserValidatorDirective } from "./validators/check-user-valitator.directive";

import { CheckPasswordValidatorDirective } from "./validators/check-password-valitator.directive";
import { CheckUsernameService } from "./services/check-username.service";
import { LogUpTemplateComponent } from "./template-examples/log-up-template/log-up-template.component";

import { SelectReactiveExampleComponent } from "./reactive-examples/select-reactive-example/select-reactive-example.component";
import { LoginReactiveComponent } from "./reactive-examples/login-reactive/login-reactive.component";
import { LogUpReactiveComponent } from "./reactive-examples/log-up-reactive/log-up-reactive.component";

/*
 * TODO: https://stackblitz.com/edit/template-vs-reactive-qb8vx2?file=src%2Fapp%2Freactive-examples%2Flog-up-reactive%2Flog-up-reactive.component.ts  
 */

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SelectExamplesComponent,
    SelectTemplateExampleComponent,
    SelectReactiveExampleComponent,
    LoginTemplateComponent,
    LoginReactiveComponent,
    FormStatusComponent,
    CheckUserValidatorDirective,
    LogUpTemplateComponent,
    LogUpReactiveComponent,
    CheckPasswordValidatorDirective
  ],
  bootstrap: [AppComponent],
  providers: [CheckUsernameService]
})
export class AppModule {}
