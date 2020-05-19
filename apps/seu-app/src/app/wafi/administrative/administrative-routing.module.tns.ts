import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { VouchersComponent } from './vouchers/vouchers.component.tns';
import { PenaltyDiscountComponent } from './penalty-discount/penalty-discount.component.tns';

const routes: Routes = [
  {path:"administrative",children:[
    
    {path:"vouchers",component:VouchersComponent},
    { path: 'penalty-discount', component: PenaltyDiscountComponent },

  ]}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AdministrativeRoutingModule { }
