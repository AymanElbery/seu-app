import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component.tns';

const routes: Routes = [
  { path: '', component: WithdrawFromUnivComponent },
  {
    path: 'procedures',
    children: [
      { path: 'withdrawuniv', component: WithdrawFromUnivComponent }
  ]}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademicprocsRoutingModule { }
