import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPaymentComponent } from './master-payment/master-payment.component';

const routes: Routes = [{ path: '', component: MasterPaymentComponent },
{
  path: '',
  children: [
  { path: 'payment',  component: MasterPaymentComponent },

 ]
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterFinanceAffairRoutingModule { }
