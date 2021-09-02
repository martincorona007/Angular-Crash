import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//new
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},//redirect to the home component
  {path:'',component: HomeComponent},
  {path:'',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
