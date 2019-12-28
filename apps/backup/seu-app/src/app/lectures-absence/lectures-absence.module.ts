import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesAbsenceRoutingModule } from './lectures-absence-routing.module';
import { AbsenceExcusesComponent } from './absence-excuses/absence-excuses.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AbsenceExcusesComponent],
  imports: [
    CommonModule,
    LecturesAbsenceRoutingModule,
    MatProgressSpinnerModule
  ],
  providers : []
})
export class LecturesAbsenceModule { }
