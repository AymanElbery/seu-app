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
import { ExamAttendanceCertificateAppService } from './services/exam-attendance-certificate-app.service';
import { ExamAttendanceCertificateAppComponent } from './exam-attendance-certificate-app/exam-attendance-certificate-app.component';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [CertificateIDComponent,
    ExamAttendanceCertificateComponent,
    ExamAttendanceCertificateAppComponent
  ],
  imports: [
    CommonModule,
    MasterPrintCertificatesRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    AppLazyTransModule,
    SeucommonModule
    //BrowserAnimationsModule
  ],
  
  providers:[CertificateIDService,
    ExamAttendanceCertificateService,
    ExamAttendanceCertificateAppService
  ]

})
export class MasterPrintCertificatesModule { }
