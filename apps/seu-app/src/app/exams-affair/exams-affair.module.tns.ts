import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ExamsAffairRoutingModule } from './exams-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ExamsScheduleComponent } from './exams-schedule/exams-schedule.component';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsAbsenceExcusesComponent } from './exams-absence-excuses/exams-absence-excuses.component';
import { ExamsResultObjectionComponent } from './exams-result-objection/exams-result-objection.component';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component';

@NgModule({
  declarations: [ExamsScheduleComponent, ExamsAttendStatComponent, ExamsAbsenceExcusesComponent, ExamsResultObjectionComponent, ExamsAttendAppComponent],
  imports: [
    ExamsAffairRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExamsAffairModule { }
