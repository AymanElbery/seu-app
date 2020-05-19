import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { RequestsDetailsComponent } from './requests-details/requests-details.component.tns';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component.tns';
import { ApprovalRequestDetailComponent } from './approval-request-detail/approval-request-detail.component.tns';
import { ApprovalHistoryComponent } from './approval-history/approval-history.component.tns';
import { ApprovalHistoryDetailComponent } from './approval-history-detail/approval-history-detail.component.tns';

const routes: Routes = [
  {
  path:'requests',
  children: [
    { path: '', component: RequestsListComponent },
    { path: 'requests-list', component: RequestsListComponent },
    { path: 'requests-details/:param1/:param2', component: RequestsDetailsComponent },
    { path: 'approval-requests', component: ApprovalRequestsComponent },
    { path: 'approval-details/:sq/:type/:empId', component: ApprovalRequestDetailComponent },
    { path: 'approval-history', component: ApprovalHistoryComponent },
    { path: 'approval-history-detail/:sq/:type/:empId', component: ApprovalHistoryDetailComponent }



  ]
}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class EmployeeRequestsRoutingModule { }
