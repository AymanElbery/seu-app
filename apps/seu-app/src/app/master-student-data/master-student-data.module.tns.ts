import { NgModule } from '@angular/core';

import { MasterStudentDataRoutingModule } from './master-student-data-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';

@NgModule({
  declarations: [AcademicStatusComponent],
  imports: [
    MasterStudentDataRoutingModule
  ]
})
export class MasterStudentDataModule { }
