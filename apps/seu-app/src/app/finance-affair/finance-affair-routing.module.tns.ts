import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component.tns';
import { FeesExceptionComponent } from './fees-exception/fees-exception.component.tns';
import { StudentPaymentComponent } from './student-payment/student-payment.component.tns';

const routes: Routes = [
  { path: 'finance', component: TuitionFeesStatComponent },
  {
    path: 'finance',
    children: [
      { path: 'fees', component: TuitionFeesStatComponent },
      { path: 'feesexception', component: FeesExceptionComponent },
      { path: 'stdpay', component: StudentPaymentComponent }


    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FinanceAffairRoutingModule { }
