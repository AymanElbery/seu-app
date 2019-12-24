import { NgModule } from '@angular/core';

import { MasterFinanceAffairRoutingModule } from './master-finance-affair-routing.module';
import { MasterPaymentComponent } from './master-payment/master-payment.component';

@NgModule({
  declarations: [MasterPaymentComponent],
  imports: [
    MasterFinanceAffairRoutingModule
  ]
})
export class MasterFinanceAffairModule { }
