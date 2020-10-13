import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {LeadershipRoutingModule} from './leadership-routing.module';
import {AppLazyTransModule} from '../app.lazytrans.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobComponent} from './components/job-component/job.component';
import {AdsComponent} from './components/ads-component/ads.component';
import {UsersComponent} from './components/users-component/users.component';
import {SeucommonModule} from '../seucommon/seucommon.module';
import {AddJobComponent} from './components/job-component/diag/add-job/add-job.component';
import {JobDetailsComponent} from './components/job-component/diag/job-details/job-details.component';
import {AddAdsComponent} from './components/ads-component/diag/add-ads/add-ads.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {LeadershipUserFormComponent} from './components/users-component/dialog/leadership-user-form.component';
import {LeadershipMyapplicationsComponent} from './components/myapplications/leadership-myapplications/leadership-myapplications.component';
import {LeadershipMyapplicationViewComponent} from './components/myapplications/leadership-myapplication-view/leadership-myapplication-view.component';
import {LeadershipApplicationNewComponent} from './components/newapplication/leadership-application-new/leadership-application-new.component';
import {LeadershipApplicationRecommendComponent} from './components/newapplication/leadership-application-recommend/leadership-application-recommend.component';
import {LeadershipApplicationAdslistComponent} from './components/newapplication/leadership-application-adslist/leadership-application-adslist.component';
import {LeadershipAddApplicationsComponent} from './components/leadership-add-applications/leadership-add-applications.component';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {LeadershipMyRecomendationssComponent} from './components/myrecommendations/myrecommendations.component';
import {LeadershipRecomendationssComponent} from './components/recommendations/recommendations.component';
import {LeadershipAdRecommendationsComponent} from './components/leadership-ad-recommendations/leadership-ad-recommendations.component';
import {AdsInterviewersComponent} from './components/ads-interviewers/ads-interviewers.component';
import { LeadershipAppViewComponent } from './components/leadership-app-view/leadership-app-view.component';
import { LeadershipAppDetailsComponent } from './components/leadership-app-details/leadership-app-details.component';
import { LeadershipAppAdminRateComponent } from './components/leadership-app-admin-rate/leadership-app-admin-rate.component';
import {AdsAgenciesComponent} from './components/ads-agencies/ads-agencies.component';
import { LeadershipPersonalInterviewsComponent } from './components/leadership-personal-interviews/leadership-personal-interviews.component';
import { LeadershipAppInterviewRateComponent } from './components/leadership-app-interview-rate/leadership-app-interview-rate.component';
import {LeadershipAgencyInterviewsComponent} from './components/leadership-agency-interviews/leadership-agency-interviews.component';
import {LeadershipAppAgencyRateComponent} from './components/leadership-app-agency-rate/leadership-app-agency-rate.component';
import { LeadershipBlankComponent } from './components/leadership-blank/leadership-blank.component';

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
    LeadershipApplicationAdslistComponent,
    LeadershipApplicationNewComponent,
    LeadershipApplicationRecommendComponent,
    LeadershipMyRecomendationssComponent,
    LeadershipRecomendationssComponent,
    LeadershipAdRecommendationsComponent,
    AdsInterviewersComponent,
    AdsAgenciesComponent,
    LeadershipAppViewComponent,
    LeadershipAppDetailsComponent,
    LeadershipAppAdminRateComponent,
    LeadershipPersonalInterviewsComponent,
    LeadershipAppInterviewRateComponent,
    LeadershipAgencyInterviewsComponent,
    LeadershipAppAgencyRateComponent,
    LeadershipBlankComponent
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
export class LeadershipModule {
}
