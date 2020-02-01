import { NgModule } from '@angular/core';

import { MasterStudentDataRoutingModule } from './master-student-data-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { AcademicRecordComponent } from './academic-record/academic-record.component.tns';

@NgModule({
  declarations: [AcademicStatusComponent, AcademicRecordComponent],
  imports: [
    MasterStudentDataRoutingModule,
    AppTransModule
  ]
})
export class MasterStudentDataModule { }
