import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';

const routes: Routes = [
  {
    path: '',
    component: AppsLandingComponent,
  },
  {
    path: 'admission-ug',
    loadChildren:
      './modules/admission-ug/admission-ug.module#AdmissionUGModule',
  }, {
    path: 'admission-gr',
    loadChildren:
      './modules/admission-gr/admission-gr.module#AdmissionGRModule',
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }