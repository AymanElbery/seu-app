import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { UgLoginComponent } from './components/ug-login/login/ug-login.component';
import { UgVeryficationComponent } from './components/ug-login/verify/ug-veryfication.component';
import { MatchDocumentsComponent } from './components/match-documents/match-documents.component';
import { AppsUgGuard } from './apps-ug-guard/apps-ug.guard';



const routes: Routes = [
  {
    path: '', component: UGHomeComponent,
    children: [
      { path: 'admission-result', component: AdmissionResultComponent },
      { path: 'display-result', component: DisplayResultComponent },

      { path: 'ug-login', component: UgLoginComponent },
      { path: 'ug-verification', component: UgVeryficationComponent },

      { path: 'pay-fee', component: PayFeeComponent, canActivate: [AppsUgGuard] },
      { path: 'match-documents', component: MatchDocumentsComponent },
      { path: 'upload-documents', component: UploadDocumentComponent, canActivate: [AppsUgGuard] }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionUGRoutingModule { }
