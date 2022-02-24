import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceAffairRoutingModule } from './finance-affair-routing.module';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component';
import { TuitionFeesService } from './services/tuition-fees.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FeesExceptionComponent} from './fees-exception/fees-exception.component';
import {AddFeesExceptionComponent} from './fees-exception/diag/add-fees-exception/add-fees-exception.component';
import {FeesExceptionService} from './services/fees-exception.service';
import { NgForm, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentPaymentComponent } from './student-payment/student-payment.component';
import { StudentInvoicesComponent } from './student-invoices/student-invoices.component';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [TuitionFeesStatComponent,FeesExceptionComponent,AddFeesExceptionComponent, StudentPaymentComponent, StudentInvoicesComponent],
  imports: [
    CommonModule,
    FinanceAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    AppLazyTransModule,
    SeucommonModule

    
  ],
  entryComponents: [AddFeesExceptionComponent],
  providers: [
    TuitionFeesService,
    FeesExceptionService
  ]
})
export class FinanceAffairModule { }
