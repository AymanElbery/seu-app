import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';



const routes: Routes = [{ path: 'otherrequests', component: AbsenceQueryComponent },
{
  path: 'otherrequests',
  children: [
  { path: 'absencequery',  component: AbsenceQueryComponent },

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterOtherRequestsRoutingModule { }
