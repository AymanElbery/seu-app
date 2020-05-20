import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { RequestsDetailsComponent } from './requests-details/requests-details.component.tns';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component.tns';
import { ApprovalRequestDetailComponent } from './approval-request-detail/approval-request-detail.component.tns';
import { RequestAddComponent } from './request-add/request-add.component.tns';
import { VacationRequestComponent } from './vacation-request/vacation-request.component.tns';
import { AttendCourceRequestComponent } from './attend-cource-request/attend-cource-request.component.tns';
import { RegularLeaveRequestComponent } from './regular-leave-request/regular-leave-request.component.tns';
import { EvacuatePartyRequestComponent } from './evacuate-party-request/evacuate-party-request.component.tns';
import { ApprovalHistoryComponent } from './approval-history/approval-history.component.tns';
import { ApprovalHistoryDetailComponent } from './approval-history-detail/approval-history-detail.component.tns';

const routes: Routes = [
  {
  path: 'requests',
  children: [
    { path: '', component: RequestsListComponent },
    { path: 'requests-list', component: RequestsListComponent },
    { path: 'requests-details/:param1/:param2', component: RequestsDetailsComponent },
    { path: 'approval-requests', component: ApprovalRequestsComponent },
    { path: 'approval-details/:sq/:type/:empId', component: ApprovalRequestDetailComponent },
    { path: 'add-request', component: RequestAddComponent },

    { path: 'vacation-request/:id', component: VacationRequestComponent },
    { path: 'attend-course-request/:id', component: AttendCourceRequestComponent },
    { path: 'regular-leave-request/:id', component: RegularLeaveRequestComponent },
    { path: 'evacuate-party-request/:id', component: EvacuatePartyRequestComponent},
    { path: 'approval-history', component: ApprovalHistoryComponent },
    { path: 'approval-history-detail/:sq/:type/:empId', component: ApprovalHistoryDetailComponent }
  ]}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class EmployeeRequestsRoutingModule { }
