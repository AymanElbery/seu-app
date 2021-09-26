import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsDiplomeAffairRoutingModule } from './exams-diplome-affair-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { ExamDiplomeExcuseComponent } from './exam-excuse/exam-diplome-excuse.component';
import { AddExamDiplomeExcuseComponent } from './exam-excuse/diag/add-exam-diplome-excuse/add-exam-diplome-excuse.component';
import { ExamDiplomeExcuseService } from './services/exam-excuse.service';

@NgModule({
  declarations: [
    ExamDiplomeExcuseComponent,
    AddExamDiplomeExcuseComponent,
  ],
  entryComponents: [
    AddExamDiplomeExcuseComponent,
  ],
  imports: [
    CommonModule,
    ExamsDiplomeAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [
    ExamDiplomeExcuseService,
  ]
})
export class ExamsDiplomeAffairModule { }
