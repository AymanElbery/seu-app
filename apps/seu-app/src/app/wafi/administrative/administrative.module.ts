import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativeRoutingModule } from './administrative-routing.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { AppLazyTransModule } from 'src/app/app.lazytrans.module';
import{SeucommonModule} from '../../seucommon/seucommon.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmpEvaluationsComponent} from './emp-evaluations/emp-evaluations.component';
import {EmpCustodyComponent} from './emp-custody/emp-custody.component';
import {EmpLettersComponent} from './emp-letters/emp-letters.component';
import {TrainingComponent} from './training/training.component';
import {VouchersComponent} from './vouchers/vouchers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PenaltyDiscountComponent } from './penalty-discount/penalty-discount.component';

@NgModule({
  declarations: [EmpEvaluationsComponent,EmpCustodyComponent,EmpLettersComponent,TrainingComponent,VouchersComponent,PenaltyDiscountComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppLazyTransModule,
    FormsModule, ReactiveFormsModule
    ,NgxPaginationModule,
    Ng2SearchPipeModule,
    SeucommonModule
  ]
})
export class AdministrativeModule { }
