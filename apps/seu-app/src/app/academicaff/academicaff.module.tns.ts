import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIdComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';

@NgModule({
  declarations: [ AcademicStatusComponent, CertificateIdComponent, AcademicRecordComponent],
  imports: [
    AcademicaffRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademicaffModule { }
