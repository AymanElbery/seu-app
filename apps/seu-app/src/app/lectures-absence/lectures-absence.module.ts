import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesAbsenceRoutingModule } from './lectures-absence-routing.module';
import { AbsenceExcusesComponent } from './absence-excuses/absence-excuses.component';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { MedicalReportService } from './services/medical-report.service';
import { LectureAbsQueryService } from './services/lecture-abs-query.service';

@NgModule({
  declarations: [AbsenceExcusesComponent, AbsenceQueryComponent, MedicalReportComponent],
  imports: [
    CommonModule,
    LecturesAbsenceRoutingModule
  ],
  providers : [MedicalReportService, LectureAbsQueryService]
})
export class LecturesAbsenceModule { }
