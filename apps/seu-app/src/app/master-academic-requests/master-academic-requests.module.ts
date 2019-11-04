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
import { TimerComponent } from '../shared/components/timer/timer.component';
import { HrMinuteDirective } from '../shared/directives/hr-minute.directive';
import { TimerModule } from '../shared/components/timer/timer.module';

@NgModule({
  declarations: [AddWithdrawalRequestComponent
    ,UniversityWithdrawalComponent
    ,AddTermExecuseComponent
    ,TermExecuseComponent
    ,AddCancelCourseRequestComponent
    ,CancelCourseComponent
   
  ],
  entryComponents:[AddWithdrawalRequestComponent,
    AddTermExecuseComponent,
    AddCancelCourseRequestComponent
  ],
  imports: [
    CommonModule,
    MasterAcademicRequestsRoutingModule,
    FormsModule,
     BrowserAnimationsModule,
     MatDialogModule,
     MatDatepickerModule,
      MatNativeDateModule,
     MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    TimerModule


  ],
  providers:[UniversityWithdrawalService,
    TermExecuseService,
    CancelCourseService
  ]
})
export class MasterAcademicRequestsModule { }
