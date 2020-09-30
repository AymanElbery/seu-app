import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationLazyTransModule } from './translation.lazytrans.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, TranslationLazyTransModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, TranslationLazyTransModule, MatProgressSpinnerModule]
})
export class TranslationCommonModule { }
