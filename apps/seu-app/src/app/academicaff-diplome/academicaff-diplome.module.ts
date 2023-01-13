import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicaffDiplomeRoutingModule } from './academicaff-diplome-routing.module';
import { AcademicDiplomeStatusComponent } from './academic-diplome-status/academic-diplome-status.component';
import { AcademicRecordDiplomeComponent  } from './academic-diplome-record/academic-diplome-record.component';
import { AcademicDiplomeStatusService } from './services/academic-diplome-status.service';
import { AcademicDiplomeRecordService } from './services/academic-diplome-record.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
@NgModule({
  declarations: [
    AcademicDiplomeStatusComponent, 
    AcademicRecordDiplomeComponent,
  ],
  imports: [
    CommonModule,
    AcademicaffDiplomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [AcademicDiplomeStatusService, AcademicDiplomeRecordService]
})
export class AcademicaffDiplomeModule {
  constructor(){

  }
}
