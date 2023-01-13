import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume-component/resume.component';
import { ResumeEnComponent } from './components/resume-en-component/resume-en.component';

const routes: Routes = [
  {
    path: "",
    component: ResumeComponent
  },
  {
    path: "ar",
    component: ResumeComponent
  },
  {
    path: "en",
    component: ResumeEnComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
