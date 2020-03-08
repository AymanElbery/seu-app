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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ExamExcuseComponent} from './exam-excuse/exam-excuse.component';
import {AddExamExcuseComponent} from './exam-excuse/diag/add-exam-excuse/add-exam-excuse.component';
import {ExamExcuseService} from './services/exam-excuse.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [ExamsScheduleComponent,
     ExamsAttendStatComponent,
     ExamsAbsenceExcusesComponent,
      ExamsResultObjectionComponent,
      ExamsAttendAppComponent,
      ExamExcuseComponent,
      AddExamExcuseComponent
      

    ],
    entryComponents: [AddExamExcuseComponent],
  imports: [
    CommonModule,
    ExamsAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [ExamAttendanceService, ExamsAttendAppService, ExamExcuseService]
})
export class ExamsAffairModule { }
