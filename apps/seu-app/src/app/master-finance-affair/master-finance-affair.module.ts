import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MasterFinanceAffairRoutingModule } from './master-finance-affair-routing.module';
import { MasterPaymentComponent } from './master-payment/master-payment.component';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { MasterRefundComponent } from './master-refund/master-refund.component';
import { AddMasterRefundComponent } from './master-refund/dialog/add-master-refund/add-master-refund.component';

@NgModule({
  declarations: [MasterPaymentComponent, MasterRefundComponent, AddMasterRefundComponent],
  imports: [
    CommonModule,
    MasterFinanceAffairRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    //BrowserAnimationsModule
    AppLazyTransModule
  ]
})
export class MasterFinanceAffairModule { }
