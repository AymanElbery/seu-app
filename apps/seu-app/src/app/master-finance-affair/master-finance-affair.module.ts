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
import { MasterRefundComponent } from './master-refund/master-refund.component';
import { RefundRequestComponent } from './master-refund/dialog/refund-request.component';
import { AppLazyTransModule } from '../app.lazytrans.module';
import{SeucommonModule} from '../seucommon/seucommon.module';
import { StudentInvoicesComponent } from './student-invoices/student-invoices.component';
@NgModule({
  declarations: [
    MasterPaymentComponent, 
    MasterRefundComponent,
    RefundRequestComponent,
    StudentInvoicesComponent
  ],
  imports: [
    CommonModule,
    MasterFinanceAffairRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    SeucommonModule,
    //BrowserAnimationsModule
    AppLazyTransModule
  ],
  entryComponents: [RefundRequestComponent],
})
export class MasterFinanceAffairModule { }
