import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { JobHomeComponent } from './components/home/home.component';



const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      { path: '', component: JobHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobApplicationRoutingModule { }
