import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [
    ],
  imports: [
    AcademicaffRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademicaffModule { }
