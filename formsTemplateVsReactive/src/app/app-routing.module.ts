import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SelectTemplateExampleComponent } from "./template-examples/select-template-example/select-template-example.component";
import { LoginTemplateComponent } from "./template-examples/login-template/login-template.component";
import { LogUpTemplateComponent } from "./template-examples/log-up-template/log-up-template.component";

import { SelectReactiveExampleComponent } from "./reactive-examples/select-reactive-example/select-reactive-example.component";
import { LoginReactiveComponent } from "./reactive-examples/login-reactive/login-reactive.component";
import { LogUpReactiveComponent } from "./reactive-examples/log-up-reactive/log-up-reactive.component";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "template"
  },
  {
    path: "template",
    component: SelectTemplateExampleComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        component: LoginTemplateComponent
      },
      {
        path: "logup",
        component: LogUpTemplateComponent
      }
    ]
  },
  {
    path: "reactive",
    component: SelectReactiveExampleComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        component: LoginReactiveComponent
      },
      {
        path: "logup",
        component: LogUpReactiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
