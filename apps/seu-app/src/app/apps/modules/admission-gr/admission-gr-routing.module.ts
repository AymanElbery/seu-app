import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
import { AdmissionResultComponent } from './components/admission-result/check/admission-result.component';
import { GrLoginComponent } from './components/gr-login/gr-login.component';
import { VerifyComponent } from './components/gr-login/verify/verify.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { AppsGrGuard } from './apps-gr-guard/apps-gr.guard';
import { DisplayResultComponent } from './components/admission-result/result/display-result.component';
import { PayFeeComponent } from './components/pay-fee/pay-fee.component';

const routes: Routes = [
  {
    path: '', component: GRHomeComponent,
    children: [
      { path: 'gr-login', component: GrLoginComponent },
      { path: 'gr-verification', component: VerifyComponent },

      { path: 'admission-result', component: AdmissionResultComponent, canActivate: [AppsGrGuard] },
      { path: 'display-result', component: DisplayResultComponent },
      { path: 'pay-fee', component: PayFeeComponent, canActivate: [AppsGrGuard] },
      { path: 'upload-documents', component: UploadFileComponent, canActivate: [AppsGrGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionGRRoutingModule { }
