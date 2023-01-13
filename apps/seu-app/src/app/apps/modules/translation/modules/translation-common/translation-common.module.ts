import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationLazyTransModule } from './translation.lazytrans.module';
import { TranslationAddCommentComponent } from '../translation-admin/components/translation-add-comment/translation-add-comment.component';
import { TranslationViewRequestComponent } from '../translation-admin/components/translation-view-request/translation-view-request.component';
import { TranslationHeaderComponent } from '../../components/translation-header/translation-header.component';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
    TranslationAddCommentComponent,
    TranslationViewRequestComponent,
    TranslationHeaderComponent
  ],
  imports: [
    CommonModule,
    SeucommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, TranslationLazyTransModule
  ],
  entryComponents: [TranslationAddCommentComponent, TranslationViewRequestComponent],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, MatProgressSpinnerModule, TranslationAddCommentComponent, TranslationHeaderComponent]
})
export class TranslationCommonModule { }
