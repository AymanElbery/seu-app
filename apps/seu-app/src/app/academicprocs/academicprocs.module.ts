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
import { ChangeMajorComponent } from './change-major/change-major.component';
import { ChangeMajorService } from './services/change-major.service';
import { AddChangeMajorComponent } from './change-major/diag/add-change-major/add-change-major.component';
import { AddRequestChangeComponent } from './change-request/diag/add-request-change/add-request-change.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { ObjectExamComponent } from './object-exam/object-exam.component';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component';
import { AddExamObjectComponent } from './object-exam/diag/add-exam-object/add-exam-object.component';
import { LectureExecuseServiceService } from './services/lecture-execuse-service.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {UnivCardComponent} from './univ-card/univ-card.component';
import {AddUnivCardComponent} from './univ-card/diag/add-univ-card/add-univ-card.component';
import {UvnivCardService} from '../other-affair/services/univ-card.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TerminationRequestComponent} from './termination-request/termination-request.component';
import {AddTerminationRequestComponent} from './termination-request/diag/add-termination-request/add-termination-request.component';
import { VisitorStudentComponent } from './visitor-student/visitor-student.component';
import { AddVisitorStudentComponent } from './visitor-student/diag/add-visitor-student/add-visitor-student.component';
import {TerminationService} from './services/termination.service';
import {MissingCardComponent} from './missing-card/missing-card/missing-card.component';
import {AddBankReceiptComponent} from './missing-card/diag/add-bank-receipt/add-bank-receipt.component';
import {AddMissingCardDataComponent} from './missing-card/diag/add-missing-card-data/add-missing-card-data.component';
import {MissingUnivCardService} from '../other-affair/services/missing-univ-card.service';
import { from } from 'rxjs';
import {AbsenceQueryComponent} from './absence-query/absence-query.component';
import {LectureAbsQueryService} from './services/lecture-abs-query.service';
import { TimerModule } from '../shared/components/timer/timer.module';
import { MatCheckboxModule } from '@angular/material';
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
         AddSummerWithdrawComponent,
           AddCourseCancelComponent,
           AddExecuseTermComponent,
           CourseEqualizeComponent,
           AddCourseEqualizeComponent,
           EnglishEqualizeComponent,
           AddEnglishEqualizerComponent,
           AddReEnrollComponent,
           ChangeMajorComponent,
           AddChangeMajorComponent,
           AddRequestChangeComponent,
           LecturesExecusesComponent,
           ObjectExamComponent,
           AddLecturesExecusesComponent,
           AddExamObjectComponent,
           UnivCardComponent,
           AddUnivCardComponent,
           AddUnivCardComponent,
           AddUnivCardComponent,
           TerminationRequestComponent,
           AddTerminationRequestComponent,
           VisitorStudentComponent,
           AddMissingCardDataComponent,
           MissingCardComponent,
           AddBankReceiptComponent,
           AddVisitorStudentComponent,
        AbsenceQueryComponent

],
     entryComponents: [AddRequestComponent,
       AddPostponeComponent,
        AddSummerWithdrawComponent,
        AddCourseCancelComponent,
         AddExecuseTermComponent,
         AddCourseEqualizeComponent,
         AddEnglishEqualizerComponent,
         AddReEnrollComponent,
         AddChangeMajorComponent,
         AddRequestChangeComponent,
         AddLecturesExecusesComponent,
         AddExamObjectComponent,
        AddUnivCardComponent,
        AddTerminationRequestComponent,
        AddBankReceiptComponent,
        AddMissingCardDataComponent,
        AddVisitorStudentComponent,

      ],

  imports: [
    CommonModule,
    AcademicprocsRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
     MatNativeDateModule,
     MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    TimerModule,

  ],
  providers: [WithdrawFromUnivService,
     TermPostponeService,
      SummerWithdrawService,
      CancelCourseService,
      TermExecuseService,
      CourseEqualizerService,
      EnglishEqualizerService,
      ReEnrollService,
      ChangeMajorService,
      LectureExecuseServiceService,
      UvnivCardService,
      TerminationService,
      MissingUnivCardService,
      MatCheckboxModule,
  ]

})
export class AcademicprocsModule { }
