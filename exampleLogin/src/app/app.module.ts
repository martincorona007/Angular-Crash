import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule}  from '@angular/common/http';
import { AppComponent } from './app.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './users/users.service';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
