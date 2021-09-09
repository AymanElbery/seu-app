import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicprocsDiplomeRoutingModule } from './academicprocs-diplome-routing.module';
import { PostponeCoronaRequestComponent } from './postpone-request-corona/postpone-request-corona.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AddPostponeCoronaComponent } from './postpone-request-corona/diag/add-postpone-corona/add-postpone-corona.component';
import { TermPostponeCoronaService } from './services/term-postpone-corona.service';
import { TermExecuseCoronaService } from './services/term-execuse-corona.service';
import { ExecuseRequestCoronaComponent } from './execuse-request-corona/execuse-request-corona.component';
import { AddExecuseTermCoronaComponent } from './execuse-request-corona/diag/add-execuse-term-corona/add-execuse-term-corona.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimerModule } from '../shared/components/timer/timer.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { SeucommonModule } from '../seucommon/seucommon.module';

@NgModule({
  declarations: [
    PostponeCoronaRequestComponent, 
    ExecuseRequestCoronaComponent,
    AddExecuseTermCoronaComponent,
    AddPostponeCoronaComponent,
  ],
  entryComponents: [
    AddPostponeCoronaComponent,
    AddExecuseTermCoronaComponent,
  ],

  imports: [
    CommonModule,
    AcademicprocsDiplomeRoutingModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    TimerModule,
    AppLazyTransModule,
    SeucommonModule
  ],
  providers: [
    TermPostponeCoronaService,
    TermExecuseCoronaService,
  ]

})
export class AcademicprocsDiplomeModule { }
