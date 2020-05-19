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
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';

@NgModule({
  declarations: [RequestsListComponent
    , RequestsDetailsComponent
    , ApprovalRequestsComponent
    , ApprovalRequestDetailComponent],
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
