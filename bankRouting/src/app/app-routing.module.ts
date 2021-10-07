import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { DepositaComponent } from './deposita/deposita.component';
import { DepositbComponent } from './depositb/depositb.component';
import { ChildoneComponent } from './otherApp/childone/childone.component';
import { ChildtwoComponent } from './otherApp/childtwo/childtwo.component';
import { ComponentOneComponent } from './otherApp/component-one/component-one.component';
import { ComponentTwoComponent } from './otherApp/component-two/component-two.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'balance', component: BalanceComponent//parent route
  },
  {
    path: 'deposit', component: DepositComponent,//parent route
    children: [
      {
        path: 'coins', component: DepositaComponent
      },
      {
        path: 'notes', component: DepositbComponent
      }
    ]
  },
  {
    path: 'withdraw', component: WithdrawComponent//parent route
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ,{ path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  {
    path: 'component-two',
    component: ComponentTwoComponent,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildoneComponent },
      { path: 'child-two', component: ChildtwoComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
