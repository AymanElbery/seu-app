import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDLazyTransModule } from './sd.lazytrans.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule, MatDialogModule,
    FormsModule, ReactiveFormsModule,
    SDLazyTransModule
  ],
  entryComponents: [],
  exports: [FormsModule, ReactiveFormsModule, MatDialogModule, CommonModule, SDLazyTransModule, MatProgressSpinnerModule]
})
export class SDCommonModule { }
