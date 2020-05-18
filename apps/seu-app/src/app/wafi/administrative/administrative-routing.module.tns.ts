import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { VouchersComponent } from './vouchers/vouchers.component.tns';

const routes: Routes = [
  {path:"administrative",children:[
    
    {path:"vouchers",component:VouchersComponent}
  ]}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AdministrativeRoutingModule { }
