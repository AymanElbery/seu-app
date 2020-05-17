import { NgModule } from '@angular/core';

import { EmployeeRequestsRoutingModule } from './employee-requests-routing.module';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { FormsModule } from '@angular/forms';
import { AppTransModule } from '../../app.trans.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [RequestsListComponent],
  imports: [
    EmployeeRequestsRoutingModule,
    FormsModule,
    AppTransModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule
  ]
})
export class EmployeeRequestsModule { }
