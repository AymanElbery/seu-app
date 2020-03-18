import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRequestsRoutingModule } from './employee-requests-routing.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { AppLazyTransModule } from 'src/app/app.lazytrans.module';
import{SeucommonModule} from '../../seucommon/seucommon.module';
import {RequestsListComponent}  from  '../employee-requests/requests-list/requests-list.component';
import {RequestsDetailsComponent} from '../employee-requests/requests-details/requests-details.component';


@NgModule({
  declarations: [RequestsListComponent,RequestsDetailsComponent],
  entryComponents: [RequestsDetailsComponent],
  imports: [
    CommonModule,
    EmployeeRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppLazyTransModule,
    SeucommonModule
  ]
})
export class EmployeeRequestsModule { }
