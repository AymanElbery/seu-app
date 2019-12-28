import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicStatusService } from './services/academic-status.service';
import { CertificateIDService } from './services/certificate-id.service';
import { FormsModule } from '@angular/forms';
import { AcademicRecordService } from './services/academic-record.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {GraduateStateComponent} from './graduate-state/graduate-state.component';
import {GraduatesStateService} from './services/graduates-state.service';
@NgModule({
  declarations: [ AcademicStatusComponent, CertificateIDComponent, AcademicRecordComponent,
    GraduateStateComponent
  ],
  imports: [
    CommonModule,
    AcademicaffRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [AcademicStatusService, CertificateIDService, AcademicRecordService,GraduatesStateService]
})
export class AcademicaffModule { }
