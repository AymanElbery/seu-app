import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { RequestsDetailsComponent } from './requests-details/requests-details.component.tns';

const routes: Routes = [
  {
  path:'requests',
  children: [
    { path: '', component: RequestsListComponent },
    { path: 'requests-list', component: RequestsListComponent },
    { path: 'requests-details/:param1/:param2', component: RequestsDetailsComponent }


  ]
}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class EmployeeRequestsRoutingModule { }
