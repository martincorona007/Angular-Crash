import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepositComponent } from './deposit/deposit.component';
import { BalanceComponent } from './balance/balance.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositaComponent } from './deposita/deposita.component';
import { DepositbComponent } from './depositb/depositb.component';
import { ComponentOneComponent } from './otherApp/component-one/component-one.component';
import { ComponentTwoComponent } from './otherApp/component-two/component-two.component';
import { ChildoneComponent } from './otherApp/childone/childone.component';
import { ChildtwoComponent } from './otherApp/childtwo/childtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    WithdrawComponent,
    DepositComponent,
    BalanceComponent,
    DepositaComponent,
    DepositbComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ChildoneComponent,
    ChildtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
