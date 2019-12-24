import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicaffRoutingModule } from './academicaff-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';

@NgModule({
  declarations: [
    CertificateIDComponent
    ],
  imports: [
    AcademicaffRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class 
AcademicaffModule { }
