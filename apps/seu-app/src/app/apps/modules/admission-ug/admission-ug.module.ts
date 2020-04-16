import { NgModule } from '@angular/core';
import { AdmissionUGRoutingModule } from './admission-ug-routing.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { AppsUGMenuComponent } from './components/apps-ug-menu/apps-ug-menu.component';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { UgLoginComponent } from './components/ug-login/login/ug-login.component';
import { UgVeryficationComponent } from './components/ug-login/verify/ug-veryfication.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdmisionUgService } from './services/admision-ug.service';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@NgModule({
  declarations: [UGHomeComponent, AdmissionResultComponent, PayFeeComponent, UploadDocumentComponent,
    AppsUGMenuComponent, DisplayResultComponent, UgLoginComponent, UgVeryficationComponent],
  imports: [AppsSharedModule,
    AdmissionUGRoutingModule,
    SeucommonModule,
    RecaptchaModule,
    AdmissionLazyTransModule
  ]
})
export class AdmissionUGModule {
  constructor(private admissionUgservice: AdmisionUgService, private globalService: GlobalBaseService) {
    if (globalService.getItem(admissionUgservice.userKey) && globalService.getItem(admissionUgservice.tokenKey)) {
      this.admissionUgservice.LoggedInToken = globalService.getItem(admissionUgservice.tokenKey);
      this.admissionUgservice.LoggedInUser = JSON.parse(globalService.getItem(admissionUgservice.userKey));
    }
  }
}

