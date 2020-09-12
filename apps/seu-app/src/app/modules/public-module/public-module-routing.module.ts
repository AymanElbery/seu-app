import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentInfoComponent } from './components/student-info-component/student-info.component'
import { PublicLandingComponent } from './components/public-landing-component/public-landing.component'

const routes: Routes = [
  {
    path: '',
    component: PublicLandingComponent,
  },
  {
    path: "card/:code",
    component: StudentInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
