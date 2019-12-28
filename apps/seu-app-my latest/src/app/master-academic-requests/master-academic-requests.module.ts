import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UniversityWithdrawalComponent} from './university-withdrawal/university-withdrawal.component';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module';
import {AddWithdrawalRequestComponent} from './university-withdrawal/diag/add-withdrawal-request/add-withdrawal-request.component';
import {UniversityWithdrawalService} from './services/university-withdrawal.service';
import {TermExecuseComponent} from './term-execuse/term-execuse.component';
import {AddTermExecuseComponent} from './term-execuse/diag/add-term-execuse/add-term-execuse.component';
import {TermExecuseService} from './services/term-execuse.service';
import {StudyPostponeComponent} from './study-postpone/study-postpone.component';
import {StudyPostponeService} from './services/study-postpone.service';
import{AddStudyPostponeComponent} from './study-postpone/diag/add-study-postpone/add-study-postpone.component';
import{ReEnrollComponent} from './re-enroll/re-enroll.component';
import{AddReEnrollComponent} from './re-enroll/diag/add-re-enroll/add-re-enroll.component';
import{ReEnrollService} from './services/re-enroll.service';
import { ToastrModule } from 'ngx-toastr';

import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { AddChangeCourseComponent } from '../master-other-requests/change-course/diag/add-change-course/add-change-course.component';
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component';

import { ExamObjectionComponent } from './exam-objection/exam-objection.component';
import { AddObjectExamComponent } from './exam-objection/diag/add-object-exam/add-object-exam.component';
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component';
import { AddExamExecuseComponent } from './exams-execuses/diag/add-exam-execuse/add-exam-execuse.component';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [AddWithdrawalRequestComponent
    ,UniversityWithdrawalComponent
    ,AddTermExecuseComponent
    ,TermExecuseComponent
    ,StudyPostponeComponent,
    AddStudyPostponeComponent,
    ReEnrollComponent,
    AddReEnrollComponent,
    CancelCourseComponent,
    AddCancelCourseRequestComponent,
    ExamObjectionComponent,
    AddObjectExamComponent,
    ExamsExecusesComponent,
    LecturesExecusesComponent,
    AddObjectExamComponent,
    AddExamExecuseComponent,
    AddLecturesExecusesComponent


  ],
  entryComponents:[AddWithdrawalRequestComponent,
    AddTermExecuseComponent,
    AddStudyPostponeComponent,
    AddReEnrollComponent,
    AddCancelCourseRequestComponent,
    AddObjectExamComponent,
    AddExamExecuseComponent,
    AddLecturesExecusesComponent
  ],
  imports: [
    CommonModule,
    MasterAcademicRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatCheckboxModule,

  ],
  providers:[UniversityWithdrawalService,
    TermExecuseService,StudyPostponeService,ReEnrollService,
  ]
})
export class MasterAcademicRequestsModule { }
