import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { InstructionsRoutingModule } from './instructions-routing.module';
import { ExamsComponent } from './exams/exams.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VedioComponent } from './exams/vedio.component';

@NgModule({
  declarations: [ ExamsComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    InstructionsRoutingModule,
    AppLazyTransModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: []
})
export class InstructionsModule { }
