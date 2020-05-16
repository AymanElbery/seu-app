import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component.tns';
import { AppTransModule } from '../../app.trans.module.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderModule } from '../../shared/header.module.tns';
import { UpdateinfoComponent } from './personalinfo/updateinfo/updateinfo.component.tns';
import { PrintReportComponent } from './print-report/print-report.component.tns';

@NgModule({
  declarations: [PersonalinfoComponent,UpdateinfoComponent,PrintReportComponent],
  entryComponents:[UpdateinfoComponent],
  imports: [
    PersonalRoutingModule,
    FormsModule,
    AppTransModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    HeaderModule

  ]
})
export class PersonalModule { }
