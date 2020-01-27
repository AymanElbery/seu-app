import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ExamExcuseComponent } from './exam-excuse/exam-excuse.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { AddExamExcuseComponent } from './exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ExamsAffairRoutingModule } from './exams-affair-routing.module.tns';

@NgModule({
  declarations: [ ExamExcuseComponent,
    AddExamExcuseComponent],
  imports: [
    ExamsAffairRoutingModule,
    NativeScriptCommonModule,
    AppTransModule,
    NativeScriptFormsModule,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExamsAffairModule { }
