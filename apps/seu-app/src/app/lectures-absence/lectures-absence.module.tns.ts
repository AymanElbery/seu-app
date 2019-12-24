import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LecturesAbsenceRoutingModule } from './lectures-absence-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    LecturesAbsenceRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LecturesAbsenceModule { }
