import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicDiplomeStatusComponent } from './academic-diplome-status/academic-diplome-status.component';
import { UDGuard } from '../guards/ud.guard';

const routes: Routes = [

  { path: '', component: AcademicDiplomeStatusComponent },
  { path: 'status', component: AcademicDiplomeStatusComponent , canActivate: [UDGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicaffDiplomeRoutingModule { }
