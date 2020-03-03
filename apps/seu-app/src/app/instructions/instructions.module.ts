import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { InstructionsRoutingModule } from './instructions-routing.module';
import { ExamsComponent } from './exams/exams.component';
@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    InstructionsRoutingModule,
    AppLazyTransModule
  ],
  providers: []
})
export class InstructionsModule { }
