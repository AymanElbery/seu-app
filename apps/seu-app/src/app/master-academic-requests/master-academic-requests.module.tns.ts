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

@NgModule({
  declarations: [
    CancelCourseComponent,
    AddCancelCourseRequestComponent,
    ExamObjectionComponent,
    AddObjectExamComponent
  ],
  imports: [
    MasterAcademicRequestsRoutingModule,
    AppTransModule,
    NativeScriptFormsModule,
    CommonModule,
    NativeScriptCommonModule
  ]
})
export class MasterAcademicRequestsModule { }
