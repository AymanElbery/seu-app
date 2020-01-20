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
import { AddCourseCancelComponent } from './cancel-course/diag/add-course-cancel/add-course-cancel.component.tns';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
import { AddCourseEqualizeComponent } from './course-equalize/diag/add-course-equalize/add-course-equalize.component.tns';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component.tns';
import { AddEnglishEqualizerComponent } from './english-equalize/diag/add-english-equalizer/add-english-equalizer.component.tns';
import { ChangeMajorComponent } from './change-major/change-major.component.tns';
import { AddChangeMajorComponent } from './change-major/diag/add-change-major/add-change-major.component.tns';


@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DropDownModule,
    NativeScriptLocalizeModule,
    TNSCheckBoxModule,
    AppTransModule

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
    CancelCourseComponent,
    AddCourseCancelComponent,
    CourseEqualizeComponent,
    AddCourseEqualizeComponent,
    EnglishEqualizeComponent,
    AddEnglishEqualizerComponent,
    ChangeMajorComponent,
    AddChangeMajorComponent
  ],
  entryComponents: [
    AddRequestComponent,
    AddPostponeComponent,
    AddExecuseTermComponent,
    AddSummerWithdrawComponent,
    AddReEnrollComponent,
    AddChangeMajorComponent
  ],

})
export class AcademicprocsModule { }
