import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module';
import { AddWithdrawalRequestComponent } from './university-withdrawal/diag/add-withdrawal-request/add-withdrawal-request.component';
import { UniversityWithdrawalService } from './services/university-withdrawal.service';
import { TermExecuseComponent } from './term-execuse/term-execuse.component';
import { AddTermExecuseComponent } from './term-execuse/diag/add-term-execuse/add-term-execuse.component';
import { TermExecuseService } from './services/term-execuse.service';
import { TermExecuseCoronaComponent } from './term-execuse-corona/term-execuse-corona.component';
import { AddTermExecuseCoronaComponent } from './term-execuse-corona/diag/add-term-execuse-corona/add-term-execuse-corona.component';
import { TermExecuseCoronaService } from './services/term-execuse-corona.service';
import { StudyPostponeComponent } from './study-postpone/study-postpone.component';
import { StudyPostponeService } from './services/study-postpone.service';
import { AddStudyPostponeComponent } from './study-postpone/diag/add-study-postpone/add-study-postpone.component';
import { StudyPostponeCoronaComponent } from './study-postpone-corona/study-postpone-corona.component';
import { StudyPostponeCoronaService } from './services/study-postpone-corona.service';
import { AddStudyPostponeCoronaComponent } from './study-postpone-corona/diag/add-study-postpone-corona/add-study-postpone-corona.component';
import { ReEnrollComponent } from './re-enroll/re-enroll.component';
import { AddReEnrollComponent } from './re-enroll/diag/add-re-enroll/add-re-enroll.component';
import { ReEnrollService } from './services/re-enroll.service';
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
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { MasterCourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { AddCourseEqualizeComponent } from './course-equalize/dialog/add-course-equalize/add-course-equalize.component';

@NgModule({
  declarations: [AddWithdrawalRequestComponent
    , UniversityWithdrawalComponent
    , AddTermExecuseComponent
    , TermExecuseComponent
    , AddTermExecuseCoronaComponent
    , TermExecuseCoronaComponent
    , StudyPostponeComponent,
    AddStudyPostponeComponent,
    StudyPostponeCoronaComponent,
    AddStudyPostponeCoronaComponent,
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
    AddLecturesExecusesComponent,
    MasterCourseEqualizeComponent,
    AddCourseEqualizeComponent


  ],
  entryComponents: [AddWithdrawalRequestComponent,
    AddTermExecuseComponent,
    AddTermExecuseCoronaComponent,
    AddStudyPostponeComponent,
    AddStudyPostponeCoronaComponent,
    AddReEnrollComponent,
    AddCancelCourseRequestComponent,
    AddObjectExamComponent,
    AddExamExecuseComponent,
    AddLecturesExecusesComponent,
    AddCourseEqualizeComponent
  ],
  imports: [
    CommonModule,
    MasterAcademicRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatCheckboxModule,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [UniversityWithdrawalService,
    TermExecuseService, StudyPostponeService, ReEnrollService, StudyPostponeCoronaService, TermExecuseCoronaService,
  ]
})
export class MasterAcademicRequestsModule { }
