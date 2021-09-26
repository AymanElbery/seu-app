import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceDiplomeAffairRoutingModule } from './finance-diplome-affair-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { StudentDiplomePaymentComponent } from './student-diplome-payment/student-diplome-payment.component';

@NgModule({
  declarations: [
    StudentDiplomePaymentComponent
  ],
  imports: [
    CommonModule,
    FinanceDiplomeAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    AppLazyTransModule,
    SeucommonModule
  ],
  entryComponents: [
    
  ],
  providers: [
    
  ]
})
export class FinanceDiplomeAffairModule { }
