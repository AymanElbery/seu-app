import { NgModule } from '@angular/core';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProjectsLandingComponent } from './components/projects-landing/projects-landing.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ProjectsRoutingModule } from './projects-routing.module'
import { HackathonFormComponent } from './components/hackathon-form/hackathon-form.component';
import { DistanceLearningFormComponent } from './components/distance-learning/register/distance-learning-form.component';
import { DistanceLearningCertComponent } from './components/distance-learning/cert/distance-learning-cert.component';
@NgModule({
  declarations: [
    ProjectsLandingComponent, ProjectsFormComponent, HackathonFormComponent,
    DistanceLearningFormComponent,DistanceLearningCertComponent
  ],
  imports: [
    ProjectsRoutingModule,
    SeucommonModule,
    RecaptchaModule,
    AppsSharedModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class ProjectsModule {
  constructor() {

  }
}

