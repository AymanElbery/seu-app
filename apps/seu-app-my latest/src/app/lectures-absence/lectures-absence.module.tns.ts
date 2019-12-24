import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LecturesAbsenceRoutingModule } from './lectures-absence-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AbsenceExcusesComponent } from './absence-excuses/absence-excuses.component';
import { AbsenceQueryComponent } from '../academicprocs/absence-query/absence-query.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';

@NgModule({
  declarations: [AbsenceExcusesComponent, AbsenceQueryComponent, MedicalReportComponent],
  imports: [
    LecturesAbsenceRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LecturesAbsenceModule { }
