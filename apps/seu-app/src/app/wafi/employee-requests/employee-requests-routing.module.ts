import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsListComponent}  from  '../employee-requests/requests-list/requests-list.component';
import {RequestAddComponent}  from  '../employee-requests/request-add/request-add.component';
import {VacationRequestComponent} from  '../employee-requests/vacation-request/vacation-request.component';
import {AttendCourceRequestComponent} from  '../employee-requests/attend-cource-request/attend-cource-request.component';
import {RegularLeaveRequestComponent} from  '../employee-requests/regular-leave-request/regular-leave-request.component';
import {EvacuatePartyRequestComponent} from  '../employee-requests/evacuate-party-request/evacuate-party-request.component';
import {ApprovalRequestsComponent} from  '../employee-requests/approval-requests/approval-requests.component';
import {ApprovalHistoryComponent} from  '../employee-requests/approval-history/approval-history.component';

const routes: Routes = [

  { path: '', component: RequestsListComponent, data: { title: 'الخدمات الإلكترونية | عرض الطلبات' }  },
  { path: 'requests-list', component: RequestsListComponent, data: { title: 'الخدمات الإلكترونية | عرض الطلبات' } },
  { path: 'add-new-request', component: RequestAddComponent, data: { title: 'الخدمات الإلكترونية | إضافة طلب جديد' } },
  { path: 'vacation-request/:id', component: VacationRequestComponent },
  { path: 'attend-course-request/:id', component: AttendCourceRequestComponent },
  { path: 'regular-leave-request/:id', component: RegularLeaveRequestComponent },
  { path: 'evacuate-party-request/:id', component: EvacuatePartyRequestComponent },
  { path: 'approval-requests', component: ApprovalRequestsComponent , data: { title: 'الخدمات الإلكترونية | الموافقة على الطلبات' }},
  { path: 'approval-history', component: ApprovalHistoryComponent, data: { title: 'الخدمات الإلكترونية | حركة الموافقات' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRequestsRoutingModule { }

