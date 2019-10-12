import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicStatusService } from './services/academic-status.service';
import { CertificateIDService } from './certificate-id.service';
import { FormsModule } from '@angular/forms';
import { AcademicRecordService } from './services/academic-record.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ AcademicStatusComponent, CertificateIDComponent, AcademicRecordComponent],
  imports: [
    CommonModule,
    AcademicaffRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [AcademicStatusService, CertificateIDService, AcademicRecordService]
})
export class AcademicaffModule { }
