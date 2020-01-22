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
import { AddRequestComponent } from './withdraw-from-univ/diag/add-request/add-request.component';
import { AddPostponeComponent } from './postpone-request/diag/add-postpone/add-postpone.component';
import { AddSummerWithdrawComponent } from './summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component';

import { AddExecuseTermComponent } from './execuse-request/diag/add-execuse-term/add-execuse-term.component';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { AddCourseEqualizeComponent } from './course-equalize/diag/add-course-equalize/add-course-equalize.component';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component';
import { AddEnglishEqualizerComponent } from './english-equalize/diag/add-english-equalizer/add-english-equalizer.component';
import { AddReEnrollComponent } from './re-eenrollment/diag/add-re-enroll/add-re-enroll.component';
import { ChangeMajorComponent } from './change-major/change-major.component';
import { AddRequestChangeComponent } from './change-request/diag/add-request-change/add-request-change.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { RegisterationHelperComponent } from './registeration-helper/registeration-helper.component';
import { AddRegisterationHelperComponent } from './registeration-helper/diag/add-registeration-helper/add-registeration-helper.component';
import { RegisterWishesComponent } from '../register-courses/register-wishes/register-wishes.component';
import { VisitorStudentComponent } from './visitor-student/visitor-student.component';
import { AddVisitorStudentComponent } from './visitor-student/diag/add-visitor-student/add-visitor-student.component';

@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [RegisterationHelperComponent, AddRegisterationHelperComponent, RegisterWishesComponent, AddRegisterWishesComponent, VisitorStudentComponent, AddVisitorStudentComponent]
})
export class AcademicprocsModule { }