import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRecordComponent } from './skills-record/skills-record.component';
import { AcademicaffRoutingModule } from './academicaff-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicStatusService } from './services/academic-status.service';
import { CertificateIDService } from './services/certificate-id.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcademicRecordService } from './services/academic-record.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import { GraduateAddressComponent } from './graduate-address/graduate-address.component';
import { GraduatesStateService } from './services/graduates-state.service';
import { GraduatesAddressService } from './services/graduates-address.service';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { StudentGradesComponent } from './student_grades/student-grades.component';
@NgModule({
  declarations: [AcademicStatusComponent, CertificateIDComponent, AcademicRecordComponent,
    GraduateStateComponent, SkillsRecordComponent , StudentGradesComponent, GraduateAddressComponent
  ],
  imports: [
    CommonModule,
    AcademicaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [AcademicStatusService, CertificateIDService, AcademicRecordService, GraduatesStateService, GraduatesAddressService]
})
export class AcademicaffModule {
  constructor(){

  }
}
