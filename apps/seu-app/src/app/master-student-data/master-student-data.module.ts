import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MasterStudentDataRoutingModule } from './master-student-data-routing.module';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import {AcademicStatusService} from './services/academic-status.service';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { AcademicRecordService } from './services/academic-record.service';

@NgModule({
  declarations: [AcademicStatusComponent, AcademicRecordComponent],
  imports: [
    CommonModule,
    MasterStudentDataRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    //BrowserAnimationsModule
  ],
  providers: [AcademicStatusService, AcademicRecordService]
})
export class MasterStudentDataModule { }
