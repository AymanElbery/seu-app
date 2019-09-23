import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceAffairRoutingModule } from './finance-affair-routing.module';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component';
import { TuitionFeesService } from './tuition-fees.service';

@NgModule({
  declarations: [TuitionFeesStatComponent],
  imports: [
    CommonModule,
    FinanceAffairRoutingModule
  ],
  providers: [
    TuitionFeesService
  ]
})
export class FinanceAffairModule { }
