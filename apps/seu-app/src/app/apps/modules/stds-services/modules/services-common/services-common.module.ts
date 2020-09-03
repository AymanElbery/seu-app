import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesLazyTransModule } from './services.lazytrans.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, ServicesLazyTransModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, ServicesLazyTransModule, MatProgressSpinnerModule]
})
export class ServicesCommonModule { }
