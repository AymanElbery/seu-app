import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
import { ChangeCourseComponent } from './change-course/change-course.component';



const routes: Routes = [{ path: 'otherrequests', component: AbsenceQueryComponent },
{
  path: 'otherrequests',
  children: [
  { path: 'absencequery',  component: AbsenceQueryComponent },
  { path: 'changebranch',  component: ChangeBranchComponent },
  {path: 'changecourse', component:ChangeCourseComponent},

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterOtherRequestsRoutingModule { }
