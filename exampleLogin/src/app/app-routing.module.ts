import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //{ path: "",component: AppComponent, pathMatch: "full"},
  { path: "login", component: LogincomponentComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent,pathMatch: "full"},
  {path: "home",component: HomeComponent,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
