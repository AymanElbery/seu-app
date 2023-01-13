import { NgModule } from '@angular/core';

import { MasterStudentDataRoutingModule } from './master-student-data-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { AcademicRecordComponent } from './academic-record/academic-record.component.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { HeaderModule } from '../shared/header.module.tns';

@NgModule({
  declarations: [AcademicStatusComponent, AcademicRecordComponent],
  imports: [
    MasterStudentDataRoutingModule,
    NativeScriptCommonModule,
    DropDownModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptLocalizeModule,
    AppTransModule,
    HeaderModule
  ]
})
export class MasterStudentDataModule { }
