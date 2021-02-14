import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsLandingComponent } from './components/projects-landing/projects-landing.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { HackathonFormComponent } from './components/hackathon-form/hackathon-form.component';
import { DistanceLearningFormComponent } from './components/distance-learning/register/distance-learning-form.component';
import { DistanceLearningCertComponent } from './components/distance-learning/cert/distance-learning-cert.component';



const routes: Routes = [
  {
    path: '', component: ProjectsLandingComponent,
    children: [
      { path: '', component: ProjectsFormComponent },
      { path: 'hackathon', component: HackathonFormComponent },
      { path: 'distance-learning-form', component: DistanceLearningFormComponent },
      { path: 'distance-learning-cert', component: DistanceLearningCertComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
