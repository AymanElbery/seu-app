import { NgModule } from '@angular/core';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { VouchersComponent } from './vouchers/vouchers.component.tns';
import { AppTransModule } from '../../app.trans.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderModule } from '../../shared/header.module.tns';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { PenaltyDiscountComponent } from './penalty-discount/penalty-discount.component.tns';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmpCustodyComponent } from './emp-custody/emp-custody.component.tns';
import { EmpEvaluationsComponent } from './emp-evaluations/emp-evaluations.component.tns';
import { EmpLettersComponent } from './emp-letters/emp-letters.component.tns';
import { TrainingComponent } from './training/training.component.tns';

@NgModule({
  declarations: [
    VouchersComponent,
    PenaltyDiscountComponent,
    EmpCustodyComponent,
    EmpEvaluationsComponent,
    EmpLettersComponent,
    TrainingComponent
  ],
  imports: [
    AdministrativeRoutingModule,
    AppTransModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    HeaderModule,
    NativeScriptHttpClientModule,
    Ng2SearchPipeModule
  ]
})
export class AdministrativeModule { }
