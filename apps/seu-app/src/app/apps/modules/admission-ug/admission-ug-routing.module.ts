import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
import { AdmissionResultComponent } from './components/admission-result/admission-result.component';
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { DisplayResultComponent } from './components/display-result/display-result.component';
import { UgLoginComponent } from './components/ug-login/ug-login.component';
import { UgVeryficationComponent } from './components/ug-veryfication/ug-veryfication.component';
const routes: Routes = [
  {
    path: '', component: UGHomeComponent,
    children: [

      { path: 'admission-result', component: AdmissionResultComponent },
      { path: 'display-result', component: DisplayResultComponent },
      { path: 'pay-fee', component: PayFeeComponent },
      { path: 'upload-documents', component: UploadDocumentComponent },
      { path: 'ug-login', component: UgLoginComponent },
      { path: 'ug-verification', component: UgVeryficationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionUGRoutingModule { }
