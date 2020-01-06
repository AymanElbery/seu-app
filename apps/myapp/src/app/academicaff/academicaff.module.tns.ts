import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicaffRoutingModule } from './academicaff-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import * as app from 'tns-core-modules/application';

@NgModule({
  declarations: [
    CertificateIDComponent,
    GraduateStateComponent
    ],
  imports: [
    AcademicaffRoutingModule,
    NativeScriptCommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class 
AcademicaffModule { }
