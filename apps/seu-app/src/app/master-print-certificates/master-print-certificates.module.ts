import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPrintCertificatesRoutingModule } from './master-print-certificates-routing.module';
import {CertificateIDService} from './services/certificate-id.service';
import {CertificateIDComponent} from './certificate-id/certificate-id.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CertificateIDComponent],
  imports: [
    CommonModule,
    MasterPrintCertificatesRoutingModule,
    MatProgressSpinnerModule
  ],
  providers:[CertificateIDService]
})
export class MasterPrintCertificatesModule { }
