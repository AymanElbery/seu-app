import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MasterOtherRequestsRoutingModule } from './master-other-requests-routing.module';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { AbseneQueryService } from './services/absene-query.service';
import { ChangeBranchService } from './services/change-branch.service';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
import { from } from 'rxjs';
import { AddChangeBranchComponent } from './change-branch/diag/add-change-branch/add-change-branch.component';
import { ChangeCourseComponent } from './change-course/change-course.component';
import { AddChangeCourseComponent } from './change-course/diag/add-change-course/add-change-course.component';
import { ChangeCourseService } from './services/change-course.service';
import { MatCheckboxModule } from '@angular/material';
import { ChangeCampMajorComponent } from './change-camp-major/change-camp-major.component';
import { AddChangeCampMajorComponent } from './change-camp-major/diag/add-change-camp-major/add-change-camp-major.component';
import { ChangeCampMajorMasterService } from './services/change-camp-major.service';
import { PersonalIDComponent } from './personal-id/personal-id.component';
import { AddPersonalIdComponent } from './personal-id/diag/add-personal-id/add-personal-id.component';
import { PersonalIDService } from './services/personal-id.service';
import { ToastrModule } from 'ngx-toastr';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { GraduateProfileDetailComponent } from './graduate-profile/diag/graduate-profile-detail/graduate-profile-detail.component';
import { AddGraduateProfileComponent } from './graduate-profile/diag/add-graduate-profile/add-graduate-profile.component';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MasterGraduateAddressComponent } from './graduate-address/graduate-address.component';

@NgModule({

  declarations: [
    AbsenceQueryComponent, 
    ChangeBranchComponent, 
    AddChangeBranchComponent,
    ChangeCourseComponent, 
    PersonalIDComponent,
    AddChangeBranchComponent, 
    AddChangeCourseComponent,
    MasterGraduateAddressComponent,
    AddPersonalIdComponent, 
    GraduateProfileComponent, 
    GraduateProfileDetailComponent, 
    AddGraduateProfileComponent,
    ChangeCampMajorComponent,
    AddChangeCampMajorComponent,
  ],
  entryComponents: [
    AddChangeBranchComponent, 
    AddChangeCourseComponent,
    AddPersonalIdComponent, 
    GraduateProfileDetailComponent, 
    AddGraduateProfileComponent,
    AddChangeCampMajorComponent
  ],
  imports: [
    CommonModule,
    MasterOtherRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    // BrowserAnimationsModule,
    SeucommonModule,
    MatCheckboxModule,
    AppLazyTransModule,
    NgSelectModule
  ],
  providers: [
    AbseneQueryService, 
    ChangeBranchService, 
    ChangeCourseService, 
    PersonalIDService,
    ChangeCampMajorMasterService
  ]


})
export class MasterOtherRequestsModule { }
