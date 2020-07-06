import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MasterStudentDataRoutingModule } from './master-student-data-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { AcademicStatusService } from './services/academic-status.service';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicRecordService } from './services/academic-record.service';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { InfoUpdateComponent } from '../master-student-data/info-update/info-update.component';
import { AddNewRequestComponent } from '../master-student-data/info-update/add-new-request/add-new-request.component';
import { MasterStudentGradesComponent } from './student_grades/student-grades.component';

@NgModule({
  declarations: [AcademicStatusComponent, AcademicRecordComponent, InfoUpdateComponent, AddNewRequestComponent, MasterStudentGradesComponent],
  imports: [
    CommonModule,
    MasterStudentDataRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppLazyTransModule,
    SeucommonModule
    // BrowserAnimationsModule
  ],
  providers: [AcademicStatusService, AcademicRecordService],
  entryComponents: [AddNewRequestComponent]
})
export class MasterStudentDataModule { }
