import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AcademicaffRoutingModule } from './academicaff-routing.module.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';
import * as app from 'tns-core-modules/application';
import { GraduateStateComponent } from './graduate-state/graduate-state.component.tns';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { from } from 'rxjs';
import { AcademicRecordComponent } from './academic-record/academic-record.component.tns';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
  declarations: [
    CertificateIDComponent,
    GraduateStateComponent,
    AcademicStatusComponent,
    AcademicRecordComponent
    ],
  imports: [
    AcademicaffRoutingModule,
    NativeScriptCommonModule,
    DropDownModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class
AcademicaffModule { }
