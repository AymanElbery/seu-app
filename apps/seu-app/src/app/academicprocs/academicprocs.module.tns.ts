import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component.tns';
import { AddRequestComponent } from './withdraw-from-univ/diag/add-request/add-request.component.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component.tns';
import { AddPostponeComponent } from './postpone-request/diag/add-postpone/add-postpone.component.tns';
import { ExecuseRequestComponent } from './execuse-request/execuse-request.component.tns';
import { AddExecuseTermComponent } from './execuse-request/diag/add-execuse-term/add-execuse-term.component.tns';
import { SummerWithdrawComponent } from './summer-withdraw/summer-withdraw.component.tns';
import { AddSummerWithdrawComponent } from './summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.tns';
import { ReEenrollmentComponent } from './re-eenrollment/re-eenrollment.component.tns';
import { AddReEnrollComponent } from './re-eenrollment/diag/add-re-enroll/add-re-enroll.component.tns';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';


@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    WithdrawFromUnivComponent,
    AddRequestComponent,
    PostponeRequestComponent,
    AddPostponeComponent,
    ExecuseRequestComponent,
    AddExecuseTermComponent,
    SummerWithdrawComponent,
    AddSummerWithdrawComponent,
    ReEenrollmentComponent,
    AddReEnrollComponent,
    CancelCourseComponent
  ],
  entryComponents: [
    AddRequestComponent,
    AddPostponeComponent,
    AddExecuseTermComponent,
    AddSummerWithdrawComponent,
    AddReEnrollComponent
  ],

})
export class AcademicprocsModule { }
