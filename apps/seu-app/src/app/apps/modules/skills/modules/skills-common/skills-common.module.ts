import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsLazyTransModule } from './skills.lazytrans.module';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, SkillsLazyTransModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, SkillsLazyTransModule, MatProgressSpinnerModule]
})
export class SkillsCommonModule { }
