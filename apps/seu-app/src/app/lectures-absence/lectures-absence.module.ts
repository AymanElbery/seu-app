import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesAbsenceRoutingModule } from './lectures-absence-routing.module';
import { AbsenceExcusesComponent } from './absence-excuses/absence-excuses.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { MedicalReportService } from './services/medical-report.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AbsenceExcusesComponent, MedicalReportComponent],
  imports: [
    CommonModule,
    LecturesAbsenceRoutingModule,
    MatProgressSpinnerModule
  ],
  providers : [MedicalReportService]
})
export class LecturesAbsenceModule { }
