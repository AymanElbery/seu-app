import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiplomeLazyTransModule } from './diplome.lazytrans.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule, MatDialogModule,
    FormsModule, ReactiveFormsModule,
    DiplomeLazyTransModule
  ],
  entryComponents: [],
  exports: [FormsModule, ReactiveFormsModule, MatDialogModule, CommonModule, DiplomeLazyTransModule, MatProgressSpinnerModule]
})
export class DiplomeCommonModule { }
