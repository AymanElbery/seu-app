import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsLandingComponent } from './components/projects-landing/projects-landing.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';



const routes: Routes = [
  {
    path: '', component: ProjectsLandingComponent ,
    children: [
      { path: '', component: ProjectsFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
