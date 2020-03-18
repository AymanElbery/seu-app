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

@NgModule({
  declarations: [RequestsListComponent,RequestsDetailsComponent,RequestAddComponent,VacationRequestComponent,AttendCourceRequestComponent,RegularLeaveRequestComponent,EvacuatePartyRequestComponent],
  entryComponents: [RequestsDetailsComponent,RequestAddComponent],
  imports: [
    CommonModule,
    EmployeeRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppLazyTransModule,
    FormsModule, ReactiveFormsModule,
    SeucommonModule
  ]
})
export class EmployeeRequestsModule { }
