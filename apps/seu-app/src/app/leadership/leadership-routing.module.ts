import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './components/job-component/job.component';
import { AdsComponent } from './components/ads-component/ads.component';
import { UsersComponent } from './components/users-component/users.component';
import { LeadershipMyapplicationsComponent } from './components/myapplications/leadership-myapplications/leadership-myapplications.component';
import { LeadershipApplicationAdslistComponent } from './components/newapplication/leadership-application-adslist/leadership-application-adslist.component';
import { LeadershipMyapplicationViewComponent } from './components/myapplications/leadership-myapplication-view/leadership-myapplication-view.component';
import { LeadershipApplicationNewComponent } from './components/newapplication/leadership-application-new/leadership-application-new.component';
import { LeadershipApplicationRecommendComponent } from './components/newapplication/leadership-application-recommend/leadership-application-recommend.component';
import { LeadershipAddApplicationsComponent } from './components/leadership-add-applications/leadership-add-applications.component';

const routes: Routes = [
  {
    path: "jobs",
    component: JobComponent
  },
  {
    path: "ads",
    component: AdsComponent
  },{
    path: "jobads",
    component: AdsComponent
  },
  {
    path: "applications",
    component: LeadershipAddApplicationsComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "myapplications",
    component: LeadershipMyapplicationsComponent
  },
  {
    path: "myapplication-details",
    component: LeadershipMyapplicationViewComponent
  },
  {
    path: "application/ads",
    component: LeadershipApplicationAdslistComponent
  },
  {
    path: "application/create",
    component: LeadershipApplicationNewComponent
  },
  {
    path: "application/create-recommend",
    component: LeadershipApplicationRecommendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipRoutingModule { }
