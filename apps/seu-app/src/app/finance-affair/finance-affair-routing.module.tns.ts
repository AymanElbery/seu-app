import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component.tns';
import { FeesExceptionComponent } from './fees-exception/fees-exception.component.tns';
import { StudentPaymentComponent } from './student-payment/student-payment.component.tns';
import { AddFeesExceptionComponent } from './fees-exception/diag/add-fees-exception/add-fees-exception.component.tns';

const routes: Routes = [
  { path: 'finance', component: TuitionFeesStatComponent },
  {
    path: 'finance',
    children: [
      { path: 'fees', component: TuitionFeesStatComponent },
      { path: 'feesexception', component: FeesExceptionComponent },
      { path: 'addfe', component: AddFeesExceptionComponent },

      { path: 'stdpay', component: StudentPaymentComponent }


    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FinanceAffairRoutingModule { }
