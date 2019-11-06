import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UniversityWithdrawalComponent} from './university-withdrawal/university-withdrawal.component';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module';
import {AddWithdrawalRequestComponent} from './university-withdrawal/diag/add-withdrawal-request/add-withdrawal-request.component';
import {UniversityWithdrawalService} from './services/university-withdrawal.service';
import {TermExecuseComponent} from './term-execuse/term-execuse.component';
import {AddTermExecuseComponent} from './term-execuse/diag/add-term-execuse/add-term-execuse.component';
import {TermExecuseService} from './services/term-execuse.service';
import {CancelCourseComponent} from './cancel-course/cancel-course.component';
import {AddCancelCourseRequestComponent} from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component';
import {CancelCourseService} from './services/cancel-course.service';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< HEAD

import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { AddChangeCourseComponent } from '../master-other-requests/change-course/diag/add-change-course/add-change-course.component';
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component';
import { AcademicprocsModule } from '../academicprocs/academicprocs.module';
import{ExamObjectionComponent} from './exam-objection/exam-objection.component';
import{AddObjectExamComponent} from './exam-objection/diag/add-object-exam/add-object-exam.component';
import { from } from 'rxjs';
import { MatCheckboxModule } from '@angular/material';
=======
import { TimerComponent } from '../shared/components/timer/timer.component';
import { HrMinuteDirective } from '../shared/directives/hr-minute.directive';
import { TimerModule } from '../shared/components/timer/timer.module';
import {ExamsExecusesComponent} from './exams-execuses/exams-execuses.component';
import {AddExamExecuseComponent} from './exams-execuses/diag/add-exam-execuse/add-exam-execuse.component';
import {ExamsExecusesService} from './services/exams-execuses.service';
import {LecturesExecusesComponent} from './lectures-execuses/lectures-execuses.component';
import {AddLecturesExecusesComponent} from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component';
import {LecturesExecusesService} from './services/lectures-execuses.service';

>>>>>>> 5374cb0645610d978091338f8958fdd119714393
@NgModule({
  declarations: [AddWithdrawalRequestComponent
    ,UniversityWithdrawalComponent
    ,AddTermExecuseComponent
    ,TermExecuseComponent
<<<<<<< HEAD
    ,StudyPostponeComponent,
    AddStudyPostponeComponent,
    ReEnrollComponent,
  AddReEnrollComponent,
    CancelCourseComponent,
    AddCancelCourseRequestComponent,
    ExamObjectionComponent,
    AddObjectExamComponent,
  ],
  entryComponents:[AddWithdrawalRequestComponent,
    AddTermExecuseComponent,
    AddStudyPostponeComponent,
    AddReEnrollComponent,
    AddCancelCourseRequestComponent
    ,AddObjectExamComponent,

=======
    ,AddCancelCourseRequestComponent
    ,CancelCourseComponent
    ,AddExamExecuseComponent
    ,ExamsExecusesComponent
    ,AddLecturesExecusesComponent
    ,LecturesExecusesComponent

   
  ],
  entryComponents:[AddWithdrawalRequestComponent,
    AddTermExecuseComponent,
    AddCancelCourseRequestComponent,
    AddExamExecuseComponent,
    AddLecturesExecusesComponent
>>>>>>> 5374cb0645610d978091338f8958fdd119714393
  ],
  imports: [
    CommonModule,
    MasterAcademicRequestsRoutingModule,
    FormsModule,
<<<<<<< HEAD
    MatDialogModule,
    BrowserAnimationsModule,
    AcademicprocsModule,
    MatCheckboxModule,


=======
     BrowserAnimationsModule,
     MatDialogModule,
     MatDatepickerModule,
      MatNativeDateModule,
     MatProgressSpinnerModule,
>>>>>>> 5374cb0645610d978091338f8958fdd119714393
    ToastrModule.forRoot(),
    TimerModule


  ],
  providers:[UniversityWithdrawalService,
    TermExecuseService,
    CancelCourseService,
    ExamsExecusesService,
    LecturesExecusesService
  ]
})
export class MasterAcademicRequestsModule { }
