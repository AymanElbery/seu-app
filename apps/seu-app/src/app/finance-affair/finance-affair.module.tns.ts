import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FinanceAffairRoutingModule } from './finance-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component.tns';
import { StudentPaymentComponent } from './student-payment/student-payment.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { FeesExceptionComponent } from './fees-exception/fees-exception.component.tns';
import { AddFeesExceptionComponent } from './fees-exception/diag/add-fees-exception/add-fees-exception.component.tns';
import { HeaderModule } from '../shared/header.module.tns';

@NgModule({
  declarations: [TuitionFeesStatComponent, AddFeesExceptionComponent,StudentPaymentComponent, FeesExceptionComponent],
  imports: [
    FinanceAffairRoutingModule,
    NativeScriptCommonModule,
    AppTransModule,
    HeaderModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FinanceAffairModule { }
