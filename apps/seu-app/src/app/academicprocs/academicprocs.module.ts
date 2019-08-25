import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module';
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
    CommonModule,
    AcademicprocsRoutingModule
  ]
})
export class AcademicprocsModule { }
