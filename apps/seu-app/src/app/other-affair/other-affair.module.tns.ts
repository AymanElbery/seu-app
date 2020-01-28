import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { OtherAffairRoutingModule } from './other-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MedicalReportComponent } from './medical-report/medical-report.component.tns';
import { AppTransModule } from '../app.trans.module.tns';


@NgModule({
  declarations: [MedicalReportComponent],
  imports: [
    OtherAffairRoutingModule,
    NativeScriptCommonModule,
    AppTransModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OtherAffairModule { }
