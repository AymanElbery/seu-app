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
import { WithdrawFromUnivService } from './services/withdraw-from-univ.service';
import { FormsModule } from '@angular/forms';
import { AddRequestComponent } from './withdraw-from-univ/diag/add-request/add-request.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { HrMinuteDirective } from '../shared/directives/hr-minute.directive';
import { TimerComponent } from '../shared/components/timer/timer.component';
import { TermPostponeService } from './services/term-postpone.service';
import { AddPostponeComponent } from './postpone-request/diag/add-postpone/add-postpone.component';
import { AddSummerWithdrawComponent } from './summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component';
import { SummerWithdrawService } from './services/summer-withdraw.service';
import { CancelCourseService } from './services/cancel-course.service';
import { AddCourseCancelComponent } from './cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { AddExecuseTermComponent } from './execuse-request/diag/add-execuse-term/add-execuse-term.component';
import { TermExecuseService } from './services/term-execuse.service';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { AddCourseEqualizeComponent } from './course-equalize/diag/add-course-equalize/add-course-equalize.component';
import { CourseEqualizerService } from './services/course-equalizer.service';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component';
import { AddEnglishEqualizerComponent } from './english-equalize/diag/add-english-equalizer/add-english-equalizer.component';
import { EnglishEqualizerService } from './services/english-equalizer.service';
import { AddReEnrollComponent } from './re-eenrollment/diag/add-re-enroll/add-re-enroll.component';
import { ReEnrollService } from './services/re-enroll.service';

@NgModule({
  declarations: [PostponeRequestComponent
    , ExecuseRequestComponent,
    SummerWithdrawComponent,
     ReEenrollmentComponent,
      ExceptSemesterComponent,
      ChangeRequestComponent,
      CancelCourseComponent,
       WithdrawFromUnivComponent,
       AddRequestComponent,
        AddPostponeComponent,
         HrMinuteDirective,
         TimerComponent,
         AddSummerWithdrawComponent,
           AddCourseCancelComponent,
           AddExecuseTermComponent,
           CourseEqualizeComponent,
           AddCourseEqualizeComponent,
           EnglishEqualizeComponent,
           AddEnglishEqualizerComponent,
           AddReEnrollComponent],

     entryComponents: [AddRequestComponent,
       AddPostponeComponent,
        AddSummerWithdrawComponent,
        AddCourseCancelComponent,
         AddExecuseTermComponent,
         AddCourseEqualizeComponent,
         AddEnglishEqualizerComponent,
         AddReEnrollComponent
      ],

  imports: [
    CommonModule,
    AcademicprocsRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [WithdrawFromUnivService,
     TermPostponeService,
      SummerWithdrawService,
      CancelCourseService,
      TermExecuseService,
      CourseEqualizerService,
      EnglishEqualizerService,
      ReEnrollService
  ]

})
export class AcademicprocsModule { }
