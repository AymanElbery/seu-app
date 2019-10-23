import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CertificateIDComponent} from './certificate-id/certificate-id.component';
import { MasterPrintCertificatesRoutingModule } from './master-print-certificates-routing.module';
import { CertificateIDService } from './services/certificate-id.service';
import {ExamAttendanceCertificateComponent} from './exam-attendance-certificate/exam-attendance-certificate.component';
import {ExamAttendanceCertificateService} from './services/exam-attendance-certificate.service';

@NgModule({
  declarations: [CertificateIDComponent,
    ExamAttendanceCertificateComponent
  ],
  imports: [
    CommonModule,
    MasterPrintCertificatesRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers:[CertificateIDService,
    ExamAttendanceCertificateService
  ]

})
export class MasterPrintCertificatesModule { }
