import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsListComponent}  from  '../employee-requests/requests-list/requests-list.component';

const routes: Routes = [

  { path: '', component: RequestsListComponent },
  { path: 'requests-list', component: RequestsListComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRequestsRoutingModule { }
