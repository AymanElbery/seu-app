import { NgModule } from '@angular/core';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { CommonModule } from "@angular/common";
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [
    CancelCourseComponent,
    AddCancelCourseRequestComponent
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
