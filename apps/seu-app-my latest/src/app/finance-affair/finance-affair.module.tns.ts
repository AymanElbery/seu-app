import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FinanceAffairRoutingModule } from './finance-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component';
import { StudentPaymentComponent } from './student-payment/student-payment.component';

@NgModule({
  declarations: [TuitionFeesStatComponent, StudentPaymentComponent],
  imports: [
    FinanceAffairRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FinanceAffairModule { }
