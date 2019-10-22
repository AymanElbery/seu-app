import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';

const routes: Routes = [{ path: 'masterstddata', component: AcademicStatusComponent },
{
  path: 'masterstddata',
  children: [
  { path: 'academicstatus',  component: AcademicStatusComponent }

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStudentDataRoutingModule { }
