import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { StdAttendanceRoutingModule } from './std-attendance-routing.module';
import { CrnsComponent } from './components/crns-component/crns.component';
import { CodeComponent } from './components/code-component/code.component';
import { AppLazyTransModule } from './../app.lazytrans.module';
import { FormatTime } from './pipes/formatTime.pipe';
import { FormatDays } from './pipes/formatDays.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrnsComponent,
    FormatTime,
    FormatDays,
    CodeComponent
  ],
  imports: [
    StdAttendanceRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class StdAttendanceModule { }
