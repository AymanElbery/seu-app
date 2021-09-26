import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDiplomePaymentComponent } from './student-diplome-payment/student-diplome-payment.component';

const routes: Routes = [
  { path: '', component: StudentDiplomePaymentComponent },
  {
    path: '',
    children: [
      { path: 'stdpay', component: StudentDiplomePaymentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceDiplomeAffairRoutingModule { }
