import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRequestsRoutingModule } from './employee-requests-routing.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { AppLazyTransModule } from 'src/app/app.lazytrans.module';
import{SeucommonModule} from '../../seucommon/seucommon.module';
import {RequestsListComponent}  from  '../employee-requests/requests-list/requests-list.component';
import {RequestsDetailsComponent} from '../employee-requests/requests-details/requests-details.component';
import {RequestAddComponent} from '../employee-requests/request-add/request-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VacationRequestComponent} from  '../employee-requests/vacation-request/vacation-request.component';
import {AttendCourceRequestComponent} from  '../employee-requests/attend-cource-request/attend-cource-request.component';
import {RegularLeaveRequestComponent} from  '../employee-requests/regular-leave-request/regular-leave-request.component';
import {EvacuatePartyRequestComponent} from  '../employee-requests/evacuate-party-request/evacuate-party-request.component';
import {ApprovalRequestsComponent} from  '../employee-requests/approval-requests/approval-requests.component';
import {ApprovalHistoryComponent} from  '../employee-requests/approval-history/approval-history.component';
import {ApprovalRequestDetailComponent} from '../employee-requests/approval-request-detail/approval-request-detail.component';
import {ApprovalHistoryDetailComponent} from '../employee-requests/approval-history-detail/approval-history-detail.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [RequestsListComponent,RequestsDetailsComponent,RequestAddComponent,VacationRequestComponent,AttendCourceRequestComponent,RegularLeaveRequestComponent,EvacuatePartyRequestComponent,ApprovalRequestsComponent,ApprovalHistoryComponent,ApprovalRequestDetailComponent,ApprovalHistoryDetailComponent],
  entryComponents: [RequestsDetailsComponent,RequestAddComponent,ApprovalRequestDetailComponent,ApprovalHistoryDetailComponent],
  imports: [
    CommonModule,
    EmployeeRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppLazyTransModule,
    FormsModule, ReactiveFormsModule,NgxPaginationModule,
    Ng2SearchPipeModule,
    SeucommonModule
  ]
})
export class EmployeeRequestsModule { }
