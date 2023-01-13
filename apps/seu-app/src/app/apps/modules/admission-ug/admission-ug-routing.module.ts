import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { UGPayFeeComponent } from './components/pay-fee/pay-fee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { UgLoginComponent } from './components/ug-login/login/ug-login.component';
import { UgVeryficationComponent } from './components/ug-login/verify/ug-veryfication.component';
import { MatchDocumentsComponent } from './components/match-documents/match-documents.component';
import { PaymentRefundComponent } from './components/payment-refund/payment-refund.component';
import { AppsUgGuard } from './apps-ug-guard/apps-ug.guard';
import { UGLandingComponent } from './components/ug-landing/ug-landing.component';
import { PayFeeCheckComponent } from './components/pay-fee-check/pay-fee-callback.component';



const routes: Routes = [
  {
    path: '', component: UGLandingComponent,
    children: [
      { path: '', component: UGHomeComponent },
      { path: 'ug-login', component: UgLoginComponent },
      { path: 'ug-verification', component: UgVeryficationComponent },
      { path: 'admission-result', component: AdmissionResultComponent, canActivate: [AppsUgGuard] },
      { path: 'display-result', component: DisplayResultComponent },
      { path: 'pay-fee', component: UGPayFeeComponent, canActivate: [AppsUgGuard] },
      { path: 'pay-callback/:tid', component: PayFeeCheckComponent},
      { path: 'match-documents', component: MatchDocumentsComponent, canActivate: [AppsUgGuard] },
      { path: 'upload-documents', component: UploadDocumentComponent, canActivate: [AppsUgGuard] },
      { path: 'payment-refund', component: PaymentRefundComponent, canActivate: [AppsUgGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionUGRoutingModule { }
