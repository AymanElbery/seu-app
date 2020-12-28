import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BBLazyTransModule } from './bb.lazytrans.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, BBLazyTransModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, BBLazyTransModule, MatProgressSpinnerModule]
})
export class BBCommonModule { }
