import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRecordComponent } from './skills-record/skills-record.component';
import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicStatusService } from './services/academic-status.service';
import { CertificateIDService } from './services/certificate-id.service';
import { FormsModule } from '@angular/forms';
import { AcademicRecordService } from './services/academic-record.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import { GraduatesStateService } from './services/graduates-state.service';
import { AppLazyTransModule } from '../app.lazytrans.module';
@NgModule({
  declarations: [AcademicStatusComponent, CertificateIDComponent, AcademicRecordComponent,
    GraduateStateComponent, SkillsRecordComponent
  ],
  imports: [
    CommonModule,
    AcademicaffRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    AppLazyTransModule
  ],
  providers: [AcademicStatusService, CertificateIDService, AcademicRecordService, GraduatesStateService]
})
export class AcademicaffModule { }
