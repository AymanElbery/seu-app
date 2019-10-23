import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificateIDComponent} from './certificate-id/certificate-id.component';
import {ExamAttendanceCertificateComponent} from './exam-attendance-certificate/exam-attendance-certificate.component';
const routes: Routes = [{ path: 'masterstdcertificate', component: CertificateIDComponent },
{
  path: 'masterstdcertificate',
  children: [
  { path: 'idcertificate',  component: CertificateIDComponent },
  { path:'examattendacecertificate', component:ExamAttendanceCertificateComponent}

 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPrintCertificatesRoutingModule { }
