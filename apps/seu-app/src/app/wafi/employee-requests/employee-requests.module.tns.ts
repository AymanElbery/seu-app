import { NgModule } from '@angular/core';

import { EmployeeRequestsRoutingModule } from './employee-requests-routing.module';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { FormsModule } from '@angular/forms';
import { AppTransModule } from '../../app.trans.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderModule } from '../../shared/header.module.tns';
import { RequestsDetailsComponent } from './requests-details/requests-details.component.tns';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component.tns';
import { ApprovalRequestDetailComponent } from './approval-request-detail/approval-request-detail.component.tns';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApprovalHistoryComponent } from './approval-history/approval-history.component.tns';
import { ApprovalHistoryDetailComponent } from './approval-history-detail/approval-history-detail.component.tns';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { RequestAddComponent } from './request-add/request-add.component.tns';
import { RegularLeaveRequestComponent } from './regular-leave-request/regular-leave-request.component.tns';
import { VacationRequestComponent } from './vacation-request/vacation-request.component.tns';
import { AttendCourceRequestComponent } from './attend-cource-request/attend-cource-request.component.tns';
import { EvacuatePartyRequestComponent } from './evacuate-party-request/evacuate-party-request.component.tns';

@NgModule({
  declarations: [RequestsListComponent
    , RequestsDetailsComponent
    , ApprovalRequestsComponent
    , ApprovalRequestDetailComponent
    , ApprovalHistoryComponent
    , ApprovalHistoryDetailComponent
    , ApprovalRequestDetailComponent
    , RequestAddComponent
    , RequestAddComponent,
     VacationRequestComponent,
     AttendCourceRequestComponent, 
     RegularLeaveRequestComponent,
      EvacuatePartyRequestComponent
  ],
  imports: [
    EmployeeRequestsRoutingModule,
    FormsModule,
    AppTransModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    HeaderModule,
    Ng2SearchPipeModule,
    DropDownModule,
    NativeScriptUIListViewModule,
    NativeScriptLocalizeModule,

  ]
})
export class EmployeeRequestsModule { }
