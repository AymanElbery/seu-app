import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LeadershipRoutingModule } from './leadership-routing.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { JobComponent } from './components/job-component/job.component';
import { AdsComponent } from './components/ads-component/ads.component';
import { UsersComponent } from './components/users-component/users.component';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { AddJobComponent } from './components/job-component/diag/add-job/add-job.component';
import { AddAdsComponent } from './components/ads-component/diag/add-ads/add-ads.component';

@NgModule({
  declarations: [
    JobComponent,
    AdsComponent,
    UsersComponent,
    AddJobComponent,
    AddAdsComponent
  ],
  imports: [
    LeadershipRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SeucommonModule,
    MatDialogModule
  ],
  entryComponents: [AddJobComponent, AddAdsComponent]
})
export class LeadershipModule { }
