import { NgModule } from '@angular/core';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { CommonModule } from "@angular/common";
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ExamObjectionComponent } from './exam-objection/exam-objection.component.tns';
import { AddObjectExamComponent } from './exam-objection/diag/add-object-exam/add-object-exam.component.tns';
import { AddExamExecuseComponent } from './exams-execuses/diag/add-exam-execuse/add-exam-execuse.component.tns';
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component.tns';
import { ReEnrollComponent } from './re-enroll/re-enroll.component.tns';
import { AddReEnrollComponent } from './re-enroll/diag/add-re-enroll/add-re-enroll.component.tns';
import { StudyPostponeComponent } from './study-postpone/study-postpone.component.tns';
import { AddStudyPostponeComponent } from './study-postpone/diag/add-study-postpone/add-study-postpone.component.tns';
import { TermExecuseComponent } from './term-execuse/term-execuse.component.tns';
import { AddTermExecuseComponent } from './term-execuse/diag/add-term-execuse/add-term-execuse.component.tns';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component.tns';
import { AddWithdrawalRequestComponent } from './university-withdrawal/diag/add-withdrawal-request/add-withdrawal-request.component.tns';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component.tns';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.tns';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';


@NgModule({
  declarations: [
    CancelCourseComponent,
    AddCancelCourseRequestComponent,
    ExamObjectionComponent,
    AddObjectExamComponent,
    ExamsExecusesComponent,
    AddExamExecuseComponent,
    LecturesExecusesComponent,
    AddLecturesExecusesComponent,
    ReEnrollComponent,
    AddReEnrollComponent,
    StudyPostponeComponent,
    AddStudyPostponeComponent,
    TermExecuseComponent,
    AddTermExecuseComponent,
    UniversityWithdrawalComponent,
    AddWithdrawalRequestComponent
  ],
  imports: [
    MasterAcademicRequestsRoutingModule,
    AppTransModule,
    NativeScriptFormsModule,
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule 

  ],
  entryComponents:[
    AddReEnrollComponent,
    AddStudyPostponeComponent,
    AddTermExecuseComponent,
    AddWithdrawalRequestComponent
  ]
})
export class MasterAcademicRequestsModule { }
