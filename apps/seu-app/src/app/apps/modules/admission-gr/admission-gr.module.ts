import { NgModule } from '@angular/core';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { AdmissionGRRoutingModule } from './admission-gr-routing.module';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';
import { AppsGrMenuComponent } from './components/apps-gr-menu/apps-gr-menu.component';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { GrLoginComponent } from './components/gr-login/gr-login.component';
import { VerifyComponent } from './components/gr-login/verify/verify.component';
import { AdmissionGRService } from './services/admission-gr.service';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';

@NgModule({
  declarations: [GRHomeComponent, AppsGrMenuComponent, AdmissionResultComponent, GrLoginComponent,
    VerifyComponent, UploadFileComponent, DisplayResultComponent, PayFeeComponent],
  imports: [
    AdmissionGRRoutingModule,
    SeucommonModule,
    RecaptchaModule,
    AppsSharedModule
  ]
})
export class AdmissionGRModule {
  constructor(private admissionGRservice: AdmissionGRService, private globalService: GlobalBaseService) {
    if (globalService.getItem(admissionGRservice.userKey) && globalService.getItem(admissionGRservice.tokenKey)) {
      this.admissionGRservice.LoggedInToken = globalService.getItem(admissionGRservice.tokenKey);
      this.admissionGRservice.LoggedInUser = JSON.parse(globalService.getItem(admissionGRservice.userKey));
    }
    this.admissionGRservice.loadSettings();
  }
}
