import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';
import { ExamAttendanceCertificateComponent } from './exam-attendance-certificate/exam-attendance-certificate.component.tns';
import { ExamAttendanceCertificateAppComponent } from './exam-attendance-certificate-app/exam-attendance-certificate-app.component';

const routes: Routes = [{ path: 'cert', component: CertificateIDComponent },
{
  path: 'cert',
  children: [
  { path: 'id',  component: CertificateIDComponent },
  { path: 'examatt', component: ExamAttendanceCertificateComponent},
  { path: 'examattapp', component: ExamAttendanceCertificateAppComponent}


 ]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterPrintCertificatesRoutingModule { }
