import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeLazyTransModule } from './resume.lazytrans.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, ResumeLazyTransModule
  ],
  entryComponents:[],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, ResumeLazyTransModule]
})
export class ResumeCommonModule { }
