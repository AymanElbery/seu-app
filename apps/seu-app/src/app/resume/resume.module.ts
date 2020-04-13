import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { FormatTime } from './pipes/formatTime.pipe';
import { FormatDays } from './pipes/formatDays.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ResumeComponent } from './components/resume-component/resume.component';
import { ResumeEnComponent } from './components/resume-en-component/resume-en.component';

@NgModule({
  declarations: [
    FormatTime,
    FormatDays,
    ResumeComponent,
    ResumeEnComponent
  ],
  imports: [
    ResumeRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResumeModule { }
