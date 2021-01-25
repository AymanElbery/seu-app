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
  // {
  //   path: 'admission-gr',
  //   loadChildren:
  //     './modules/admission-gr/admission-gr.module#AdmissionGRModule',
  // },
  {
    path: 'stds-services',
    loadChildren:
      './modules/stds-services/stds-services.module#STDSServicesModule',
  },
  {
    path: 'skills',
    loadChildren:
      './modules/skills/skills.module#SkillsModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'translation',
    loadChildren:
      './modules/translation/translation.module#TranslationModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'resume',
    loadChildren:
      './modules/resume/resume.module#ResumeModule', 
    canLoad: [AuthGuard]
  },
  // {
  //   path: 'job-application',
  //   loadChildren:
  //     './modules/job-application/job-application.module#JobApplicationModule',
  // },
  {
    path: 'projects',
    loadChildren:
      './modules/projects/projects.module#ProjectsModule',
  },
  {
    path: 'bbreports',
    loadChildren:
      './modules/bbreports/bbreports.module#BBReportsModule',
    canLoad: [AuthGuard]
  }, {
    path: 'contactus',
    loadChildren:
      './modules/contactus/contactus.module#ContactusModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
