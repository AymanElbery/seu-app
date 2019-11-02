import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
<<<<<<< HEAD
import { ChangeCourseComponent } from './change-course/change-course.component';
=======
import {PersonalIDComponent} from './personal-id/personal-id.component';
>>>>>>> 090a49ed99df921684352d6e5945f50a142175a8



const routes: Routes = [{ path: 'otherrequests', component: AbsenceQueryComponent },
{
  path: 'otherrequests',
  children: [
  { path: 'absencequery',  component: AbsenceQueryComponent },
  { path: 'changebranch',  component: ChangeBranchComponent },
<<<<<<< HEAD
  {path: 'changecourse', component:ChangeCourseComponent},
=======
  { path: 'personalid',  component:PersonalIDComponent  },
>>>>>>> 090a49ed99df921684352d6e5945f50a142175a8

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterOtherRequestsRoutingModule { }
