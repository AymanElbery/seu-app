import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';
import { AuthGuard } from '../guards/auth.guard'
const routes: Routes = [
  {
    path: '',
    component: AppsLandingComponent,
  },
  {
    path: 'admission-ug',
    loadChildren:
      './modules/admission-ug/admission-ug.module#AdmissionUGModule',
  },
  {
    path: 'job-application',
    loadChildren:
      './modules/job-application/job-application.module#JobApplicationModule',
  },
  {
    path: 'admission-gr',
    loadChildren:
      './modules/admission-gr/admission-gr.module#AdmissionGRModule',
  },
  {
    path: 'skills',
    loadChildren:
      './modules/skills/skills.module#SkillsModule',
      canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
