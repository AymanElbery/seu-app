import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MasterOtherRequestsRoutingModule } from './master-other-requests-routing.module';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { AbseneQueryService } from './services/absene-query.service';
import{ChangeBranchService}  from './services/change-branch.service';
import{ChangeBranchComponent } from './change-branch/change-branch.component'
import { from } from 'rxjs';
import{AddChangeBranchComponent} from './change-branch/diag/add-change-branch/add-change-branch.component';
import{ChangeCourseComponent} from './change-course/change-course.component';
import{AddChangeCourseComponent} from'./change-course/diag/add-change-course/add-change-course.component';
import { ChangeCourseService } from './services/change-course.service';
import { MatCheckboxModule} from '@angular/material';




@NgModule({
  declarations: [AbsenceQueryComponent,ChangeBranchComponent,AddChangeBranchComponent,ChangeCourseComponent,AddChangeCourseComponent],
  entryComponents:[AddChangeBranchComponent,AddChangeCourseComponent],
  imports: [
    CommonModule,
    MasterOtherRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [AbseneQueryService,ChangeBranchService,ChangeCourseService]

})
export class MasterOtherRequestsModule { }
