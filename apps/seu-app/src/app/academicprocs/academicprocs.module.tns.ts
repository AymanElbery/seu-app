import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component';
import { ExecuseRequestComponent } from './execuse-request/execuse-request.component';
import { SummerWithdrawComponent } from './summer-withdraw/summer-withdraw.component';
import { ReEenrollmentComponent } from './re-eenrollment/re-eenrollment.component';
import { ExceptSemesterComponent } from './except-semester/except-semester.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component';

@NgModule({
  declarations: [PostponeRequestComponent, ExecuseRequestComponent, SummerWithdrawComponent, ReEenrollmentComponent, ExceptSemesterComponent, ChangeRequestComponent, CancelCourseComponent, WithdrawFromUnivComponent],
  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademicprocsModule { }
