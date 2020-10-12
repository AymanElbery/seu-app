import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobComponent} from './components/job-component/job.component';
import {AdsComponent} from './components/ads-component/ads.component';
import {UsersComponent} from './components/users-component/users.component';
import {LeadershipMyapplicationsComponent} from './components/myapplications/leadership-myapplications/leadership-myapplications.component';
import {LeadershipMyRecomendationssComponent} from './components/myrecommendations/myrecommendations.component';
import {LeadershipRecomendationssComponent} from './components/recommendations/recommendations.component';
import {LeadershipApplicationAdslistComponent} from './components/newapplication/leadership-application-adslist/leadership-application-adslist.component';
import {LeadershipMyapplicationViewComponent} from './components/myapplications/leadership-myapplication-view/leadership-myapplication-view.component';
import {LeadershipApplicationNewComponent} from './components/newapplication/leadership-application-new/leadership-application-new.component';
import {LeadershipApplicationRecommendComponent} from './components/newapplication/leadership-application-recommend/leadership-application-recommend.component';
import {LeadershipAddApplicationsComponent} from './components/leadership-add-applications/leadership-add-applications.component';
import {LeadershipAdRecommendationsComponent} from './components/leadership-ad-recommendations/leadership-ad-recommendations.component';
import {AdsInterviewersComponent} from './components/ads-interviewers/ads-interviewers.component';
import { LeadershipAppViewComponent } from './components/leadership-app-view/leadership-app-view.component';
import { LeadershipAppDetailsComponent } from './components/leadership-app-details/leadership-app-details.component';
import { LeadershipAppAdminRateComponent } from './components/leadership-app-admin-rate/leadership-app-admin-rate.component';

const routes: Routes = [
  {
    path: 'jobs',
    component: JobComponent
  },
  {
    path: 'ads',
    component: AdsComponent
  }, {
    path: 'jobads',
    component: AdsComponent
  },
  {
    path: 'applications',
    component: LeadershipAddApplicationsComponent
  },
  {
    path: 'application-display', component: LeadershipAppViewComponent,
    children: [
        {
          path: 'details/:id', component: LeadershipAppDetailsComponent
        },
        {
          path: 'admin-rate/:id', component: LeadershipAppAdminRateComponent
        },
    ]
  },
  {
    path: "application-view",
    component: LeadershipAddApplicationsComponent
  },
  {
    path: "adrecommendations",
    component: LeadershipAdRecommendationsComponent
  },
  {
    path: 'interviewers',
    component: AdsInterviewersComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'myapplications',
    component: LeadershipMyapplicationsComponent
  },
  {
    path: 'myrecomendations',
    component: LeadershipMyRecomendationssComponent
  },
  // {
  //   path: "recomendations",
  //   component: LeadershipRecomendationssComponent
  // },
  {
    path: 'myapplication-details',
    component: LeadershipMyapplicationViewComponent
  },
  {
    path: 'application/ads',
    component: LeadershipApplicationAdslistComponent
  },
  {
    path: 'application/create',
    component: LeadershipApplicationNewComponent
  },
  {
    path: 'application/create-recommend',
    component: LeadershipApplicationRecommendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipRoutingModule {
}
