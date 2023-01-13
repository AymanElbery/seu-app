import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificateIDComponent} from './certificate-id/certificate-id.component';
import {ExamAttendanceCertificateComponent} from './exam-attendance-certificate/exam-attendance-certificate.component';
import { ExamAttendanceCertificateAppComponent } from './exam-attendance-certificate-app/exam-attendance-certificate-app.component';
const routes: Routes = [{ path: '', component: CertificateIDComponent },
{
  path: '',
  children: [
  { path: 'idcertificate',  component: CertificateIDComponent, data: { title: 'الخدمات الإلكترونية |  - ماجيستير' } },
  { path:'examattendacecertificate', component:ExamAttendanceCertificateComponent, data: { title: 'الخدمات الإلكترونية | شهادة حضور إختبارات - ماجيستير' }},
  { path:'examattendacecertificateapp', component:ExamAttendanceCertificateAppComponent, data: { title: 'الخدمات الإلكترونية | إثبات حضور إختبارات - ماجيستير' }}
 

 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPrintCertificatesRoutingModule { }
