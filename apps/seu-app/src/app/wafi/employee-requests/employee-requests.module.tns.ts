import { NgModule } from '@angular/core';

import { EmployeeRequestsRoutingModule } from './employee-requests-routing.module';
import { RequestsListComponent } from './requests-list/requests-list.component.tns';
import { FormsModule } from '@angular/forms';
import { AppTransModule } from 'src/app/app.trans.module';

@NgModule({
  declarations: [RequestsListComponent],
  imports: [
    EmployeeRequestsRoutingModule,
    FormsModule,
    AppTransModule
  ]
})
export class EmployeeRequestsModule { }
