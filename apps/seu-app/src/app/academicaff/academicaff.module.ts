import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';

@NgModule({
  declarations: [ AcademicStatusComponent, CertificateIDComponent, AcademicRecordComponent],
  imports: [
    CommonModule,
    AcademicaffRoutingModule
  ]
})
export class AcademicaffModule { }
