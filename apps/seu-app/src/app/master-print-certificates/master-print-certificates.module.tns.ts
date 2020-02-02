import { NgModule } from '@angular/core';

import { MasterPrintCertificatesRoutingModule } from './master-print-certificates-routing.module.tns';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';
import { ExamAttendanceCertificateComponent } from './exam-attendance-certificate/exam-attendance-certificate.component.tns';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { AppTransModule } from '../app.trans.module';

@NgModule({
  declarations: [CertificateIDComponent,ExamAttendanceCertificateComponent],
  imports: [
    MasterPrintCertificatesRoutingModule,
    NativeScriptCommonModule,
    DropDownModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptLocalizeModule,
    AppTransModule
  ]
})
export class MasterPrintCertificatesModule { }
