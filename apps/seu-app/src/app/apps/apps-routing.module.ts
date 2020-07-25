import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLandingComponent } from './components/apps-landing/apps-landing.component';
import { UserTypeGuard } from '../guards/userType.guard'
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
    path: 'admission-gr',
    loadChildren:
      './modules/admission-gr/admission-gr.module#AdmissionGRModule',
  },
  {
    path: 'skills',
    loadChildren:
      './modules/skills/skills.module#SkillsModule',
    canActivate: [UserTypeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
