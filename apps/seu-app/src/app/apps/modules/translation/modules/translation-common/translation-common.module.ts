import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationLazyTransModule } from './translation.lazytrans.module';
import { TranslationAddCommentComponent } from '../translation-admin/components/translation-add-comment/translation-add-comment.component';

@NgModule({
  declarations: [
    TranslationAddCommentComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, TranslationLazyTransModule
  ],
  entryComponents:[TranslationAddCommentComponent],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, TranslationLazyTransModule, MatProgressSpinnerModule,TranslationAddCommentComponent]
})
export class TranslationCommonModule { }
