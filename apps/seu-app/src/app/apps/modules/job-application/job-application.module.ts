import { NgModule } from '@angular/core';
import { JobApplicationRoutingModule } from './job-application-routing.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { JobApplicationService } from './services/job-application.service';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { LandingComponent } from './components/landing/landing.component';
import { JobHomeComponent } from './components/home/home.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    LandingComponent,
    JobHomeComponent
  ],
  imports: [
    JobApplicationRoutingModule,
    SeucommonModule,
    RecaptchaModule,
    AppsSharedModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class JobApplicationModule {
  constructor() {

  }
}

