import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPaymentComponent } from './master-payment/master-payment.component';
import { MasterRefundComponent } from './master-refund/master-refund.component';

const routes: Routes = [{ path: '', component: MasterPaymentComponent },
{
  path: '',
  children: [
  { path: 'payment',  component: MasterPaymentComponent },
  { path: 'refund',  component: MasterRefundComponent }

 ]
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterFinanceAffairRoutingModule { }
