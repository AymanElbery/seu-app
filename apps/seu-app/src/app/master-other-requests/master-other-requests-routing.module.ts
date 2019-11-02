import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { ChangeBranchComponent } from './change-branch/change-branch.component';
import {PersonalIDComponent} from './personal-id/personal-id.component';



const routes: Routes = [{ path: 'otherrequests', component: AbsenceQueryComponent },
{
  path: 'otherrequests',
  children: [
  { path: 'absencequery',  component: AbsenceQueryComponent },
  { path: 'changebranch',  component: ChangeBranchComponent },
  { path: 'personalid',  component:PersonalIDComponent  },

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterOtherRequestsRoutingModule { }
