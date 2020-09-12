import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LeadershipRoutingModule } from './leadership-routing.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobComponent } from './components/job-component/job.component';
import { AdsComponent } from './components/ads-component/ads.component';
import { UsersComponent } from './components/users-component/users.component';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { AddJobComponent } from './components/job-component/diag/add-job/add-job.component';
import { JobDetailsComponent } from './components/job-component/diag/job-details/job-details.component';
import { AddAdsComponent } from './components/ads-component/diag/add-ads/add-ads.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LeadershipUserFormComponent } from './components/users-component/dialog/leadership-user-form.component';
import { LeadershipMyapplicationsComponent } from './components/myapplications/leadership-myapplications/leadership-myapplications.component';
import { LeadershipMyapplicationViewComponent } from './components/myapplications/leadership-myapplication-view/leadership-myapplication-view.component';
import { LeadershipApplicationNewComponent } from './components/newapplication/leadership-application-new/leadership-application-new.component';
import { LeadershipApplicationAdslistComponent } from './components/newapplication/leadership-application-adslist/leadership-application-adslist.component';
import { LeadershipAddApplicationsComponent } from './components/leadership-add-applications/leadership-add-applications.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    JobComponent,
    AdsComponent,
    UsersComponent,
    AddJobComponent,
    AddAdsComponent,
    JobDetailsComponent,
    AddAdsComponent,
    LeadershipUserFormComponent, LeadershipAddApplicationsComponent,
    LeadershipMyapplicationsComponent, LeadershipMyapplicationViewComponent,
    LeadershipApplicationAdslistComponent, LeadershipApplicationNewComponent,
  ],
  imports: [
    LeadershipRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SeucommonModule,
    MatDialogModule,
    CKEditorModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [AddJobComponent, AddAdsComponent, JobDetailsComponent, LeadershipUserFormComponent
  ]
})
export class LeadershipModule { }