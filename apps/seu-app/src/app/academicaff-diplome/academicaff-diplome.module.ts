import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicaffDiplomeRoutingModule } from './academicaff-diplome-routing.module';
import { AcademicDiplomeStatusComponent } from './academic-diplome-status/academic-diplome-status.component';
import { AcademicDiplomeStatusService } from './services/academic-diplome-status.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
@NgModule({
  declarations: [
    AcademicDiplomeStatusComponent, 
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
  providers: [AcademicDiplomeStatusService]
})
export class AcademicaffDiplomeModule {
  constructor(){

  }
}
