import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsDiplomeAffairRoutingModule } from './exams-diplome-affair-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { ExamDiplomeExcuseComponent } from './exam-excuse/exam-diplome-excuse.component';
import { AddExamDiplomeExcuseComponent } from './exam-excuse/diag/add-exam-diplome-excuse/add-exam-diplome-excuse.component';
import { ExamDiplomeExcuseService } from './services/exam-excuse.service';
import { ExamAttendanceService } from './services/exam-attendance.service';
import { ExamsAttendAppService } from './services/exams-attend-app.service';
import { ExamsDiplomeAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsDiplomeAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import { ExamsDiplomeObjectionComponent } from './exams-objection/exams-objection.component';
import { AddObjectExamComponent } from './exams-objection/diag/add-object-exam.component';

@NgModule({
  declarations: [
    ExamDiplomeExcuseComponent,
    AddExamDiplomeExcuseComponent,
    ExamsDiplomeAttendStatComponent,
    ExamsDiplomeAttendAppComponent,
    ExamsDiplomeObjectionComponent,
    AddObjectExamComponent
  ],
  entryComponents: [
    AddExamDiplomeExcuseComponent,
    AddObjectExamComponent
  ],
  imports: [
    CommonModule,
    ExamsDiplomeAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [
    ExamDiplomeExcuseService,
    ExamAttendanceService,
    ExamsAttendAppService,
  ]
})
export class ExamsDiplomeAffairModule { }
