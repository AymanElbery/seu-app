import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MasterFinanceAffairRoutingModule } from './master-finance-affair-routing.module';
import { MasterPaymentComponent } from './master-payment/master-payment.component';

@NgModule({
  declarations: [MasterPaymentComponent],
  imports: [
    CommonModule,
    MasterFinanceAffairRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    //BrowserAnimationsModule
  ]
})
export class MasterFinanceAffairModule { }
