import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { providerDeclarations, routes } from './resume.common';
import { ResumeLandingComponent } from './components/resume-landing/resume-landing.component';
import { ResumeHomeComponent } from './components/resume-home/resume-home.component';
import { RouterModule } from '@angular/router';
import { ResumeServicesModule } from './services/resume-service.module';
import { ResumeMenuComponent } from './components/menu/resume-menu/resume-menu.component';
import { ResumeUserComponent } from './components/resume-user/resume-user.component';
import { ResumeInstructorMenuComponent } from './components/menu/resume-instructor-menu/resume-instructor-menu.component';
import { ResumeManagerMenuComponent } from './components/menu/resume-manager-menu/resume-manager-menu.component';
import { ResumeAdminMenuComponent } from './components/menu/resume-admin-menu/resume-admin-menu.component';
import { ResumeCommonModule } from './modules/resume-common/resume-common.module';


@NgModule({
  declarations: [
    ResumeLandingComponent,
    ResumeHomeComponent,
    ResumeMenuComponent,
    ResumeInstructorMenuComponent,
    ResumeManagerMenuComponent,
    ResumeAdminMenuComponent,
    ResumeUserComponent
  ],
  imports: [
    SeucommonModule,
    ResumeServicesModule,
    ResumeCommonModule,  
    RouterModule.forChild(routes)
  ],
  providers: [
    providerDeclarations
  ]
})
export class ResumeModule {
  constructor(private translate: TranslateService) {
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

