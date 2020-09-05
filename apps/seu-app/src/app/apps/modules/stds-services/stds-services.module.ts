import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { providerDeclarations, componentDeclarations, routes } from './stds-services.common';
import { RouterModule } from '@angular/router';
import { ServicesCommonModule } from './modules/services-common/services-common.module';
import { StudentServicesModule } from './services/student-services.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { StudentService } from './services/student.service';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';

@NgModule({
  declarations: [componentDeclarations],
  imports: [
    SeucommonModule,
    AppsSharedModule,
    RecaptchaModule,
    RouterModule.forChild(routes),
    StudentServicesModule,
    ServicesCommonModule
  ],
  providers: [providerDeclarations]
})
export class STDSServicesModule {
  constructor(private translate: TranslateService, private stdservice: StudentService, private globalService: GlobalBaseService) {
    if (globalService.getItem(stdservice.tokenKey)) {
      this.stdservice.LoggedInToken = globalService.getItem(stdservice.tokenKey);
      this.stdservice.load_token_data();
    } else {
      this.stdservice.pushuserLoaded();
    }
    document.getElementById('bodyloading')
      ? document.getElementById('bodyloading').remove()
      : '';
    this.translate.use('ar');
  }
}

