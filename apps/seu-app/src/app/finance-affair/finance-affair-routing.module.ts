import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component';
import { FeesExceptionComponent } from './fees-exception/fees-exception.component';
import { StudentPaymentComponent } from './student-payment/student-payment.component';
import { StudentInvoicesComponent } from './student-invoices/student-invoices.component';

const routes: Routes = [
  { path: '', component: TuitionFeesStatComponent },
  {
    path: '',
    children: [
      { path: 'fees', component: TuitionFeesStatComponent },
      { path: 'feesexception', component: FeesExceptionComponent },
      { path: 'stdpay', component: StudentPaymentComponent },
      { path: 'invoices', component: StudentInvoicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAffairRoutingModule { }
