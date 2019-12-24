import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademicprocsRoutingModule } from './academicprocs-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({

  imports: [
    AcademicprocsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
  ]
})
export class AcademicprocsModule { }
