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
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component.tns';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.tns';
import { ReEnrollComponent } from './re-enroll/re-enroll.component.tns';
import { AddReEnrollComponent } from './re-enroll/diag/add-re-enroll/add-re-enroll.component.tns';

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
    AddReEnrollComponent
  ],
  imports: [
    MasterAcademicRequestsRoutingModule,
    AppTransModule,
    NativeScriptFormsModule,
    CommonModule,
    NativeScriptCommonModule
  ],
  entryComponents:[
    AddReEnrollComponent
  ]
})
export class MasterAcademicRequestsModule { }
