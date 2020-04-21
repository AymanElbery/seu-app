import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
import { AdmissionResultComponent } from './components/admission-result/admission-result.component';
import { GrLoginComponent } from './components/gr-login/gr-login.component';
import { VerifyComponent } from './components/gr-login/verify/verify.component';


const routes: Routes = [
  {
    path: '', component: GRHomeComponent,
    children: [
      { path: 'admission-result', component: AdmissionResultComponent }, 
      { path: 'gr-login', component: GrLoginComponent },
      { path: 'gr-verification', component: VerifyComponent }

      // { path: 'pay-fee', component: PayFeeComponent, canActivate: [AppsUgGuard] }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionGRRoutingModule { }
