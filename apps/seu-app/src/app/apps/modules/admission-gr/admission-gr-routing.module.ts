import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
import { AdmissionResultComponent } from './components/admission-result/admission-result.component';
import { GrLoginComponent } from './components/gr-login/gr-login.component';
import { VerifyComponent } from './components/gr-login/verify/verify.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import {AppsGrGuard} from './apps-gr-guard/apps-gr.guard';

const routes: Routes = [
  {
    path: '', component: GRHomeComponent,
    children: [
      { path: 'admission-result', component: AdmissionResultComponent }, 
      { path: 'gr-login', component: GrLoginComponent },
      { path: 'gr-verification', component: VerifyComponent },
      { path: 'gr-upload-file', component: UploadFileComponent  ,canActivate: [AppsGrGuard]}

      // { path: 'pay-fee', component: PayFeeComponent, canActivate: [AppsUgGuard] }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionGRRoutingModule { }
