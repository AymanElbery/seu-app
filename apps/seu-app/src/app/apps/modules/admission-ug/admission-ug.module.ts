import { NgModule } from '@angular/core';
import { AdmissionUGRoutingModule } from './admission-ug-routing.module';
import { AppsSharedModule } from '../apps-shared/apps.shared.module';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { UGPayFeeComponent } from './components/pay-fee/pay-fee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';
import { SeucommonModule } from '../../../seucommon/seucommon.module';
import { AppsUGMenuComponent } from './components/apps-ug-menu/apps-ug-menu.component';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { UgLoginComponent } from './components/ug-login/login/ug-login.component';
import { UgVeryficationComponent } from './components/ug-login/verify/ug-veryfication.component';
import { MatchDocumentsComponent } from './components/match-documents/match-documents.component';
import { PaymentRefundComponent } from './components/payment-refund/payment-refund.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdmissionUGService } from './services/admission-ug.service';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { UGLandingComponent } from './components/ug-landing/ug-landing.component';
import { PaymentsModule } from '../../payments/payments.module';
import { PayFeeCheckComponent } from './components/pay-fee-check/pay-fee-callback.component';


@NgModule({
  declarations: [UGHomeComponent, AdmissionResultComponent, UGPayFeeComponent, UploadDocumentComponent,PayFeeCheckComponent,
    AppsUGMenuComponent, DisplayResultComponent, UgLoginComponent, UgVeryficationComponent, MatchDocumentsComponent, PaymentRefundComponent, UGLandingComponent],
  imports: [
    AdmissionUGRoutingModule,
    SeucommonModule,
    RecaptchaModule,
    AppsSharedModule,
    PaymentsModule
  ]
})
export class AdmissionUGModule {
  constructor(private admissionUgservice: AdmissionUGService, private globalService: GlobalBaseService) {
    if (globalService.getItem(admissionUgservice.userKey) && globalService.getItem(admissionUgservice.tokenKey)) {
      this.admissionUgservice.LoggedInToken = globalService.getItem(admissionUgservice.tokenKey);
      this.admissionUgservice.LoggedInUser = JSON.parse(globalService.getItem(admissionUgservice.userKey));
    }
    this.admissionUgservice.loadSettings();
  }
}

