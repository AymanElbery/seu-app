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
      { path: 'feesexception', component: FeesExceptionComponent, data: { title: 'الخدمات الإلكترونية | الإعفاء من الرسوم - بكالوريوس' } },
      { path: 'stdpay', component: StudentPaymentComponent, data: { title: 'الخدمات الإلكترونية | سداد الرسوم الدراسية - بكالوريوس' } },
      { path: 'invoices', component: StudentInvoicesComponent, data: { title: 'الخدمات الإلكترونية | الفاتورة الإلكترونية - بكالوريوس' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAffairRoutingModule { }
