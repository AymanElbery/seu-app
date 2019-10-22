import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CertificateIDComponent} from './certificate-id/certificate-id.component';
const routes: Routes = [{ path: 'masterstdcertificate', component: CertificateIDComponent },
{
  path: 'masterstdcertificate',
  children: [
  { path: 'idcertificate',  component: CertificateIDComponent }

 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPrintCertificatesRoutingModule { }
