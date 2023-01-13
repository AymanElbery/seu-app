import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDiplomePaymentComponent } from './student-diplome-payment/student-diplome-payment.component';
import { StudentInvoicesComponent } from './student-invoices/student-invoices.component';

const routes: Routes = [
  { path: '', component: StudentDiplomePaymentComponent, data: { title: 'الخدمات الإلكترونية | سداد الرسوم - دبلوم' } },
  {
    path: '',
    children: [
      { path: 'stdpay', component: StudentDiplomePaymentComponent, data: { title: 'الخدمات الإلكترونية | سداد الرسوم - دبلوم' } },
      { path: 'invoices', component: StudentInvoicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceDiplomeAffairRoutingModule { }
