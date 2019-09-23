import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsAffairRoutingModule } from './exams-affair-routing.module';
import { ExamsScheduleComponent } from './exams-schedule/exams-schedule.component';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsAbsenceExcusesComponent } from './exams-absence-excuses/exams-absence-excuses.component';
import { ExamsResultObjectionComponent } from './exams-result-objection/exams-result-objection.component';
import { ExamAttendanceService } from './services/exam-attendance.service';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import { ExamsAttendAppService } from './services/exams-attend-app.service';

@NgModule({
  declarations: [ExamsScheduleComponent,
     ExamsAttendStatComponent,
     ExamsAbsenceExcusesComponent,
      ExamsResultObjectionComponent,
      ExamsAttendAppComponent],
  imports: [
    CommonModule,
    ExamsAffairRoutingModule
  ],
  providers: [ExamAttendanceService, ExamsAttendAppService]
})
export class ExamsAffairModule { }
