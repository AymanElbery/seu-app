import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ExamExcuseComponent } from './exam-excuse/exam-excuse.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { AddExamExcuseComponent } from './exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ExamsAffairRoutingModule } from './exams-affair-routing.module.tns';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component.tns';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component.tns';

@NgModule({
  declarations: [ ExamExcuseComponent,
    AddExamExcuseComponent,
    ExamsAttendAppComponent,
    ExamsAttendStatComponent
  ],
  imports: [
    ExamsAffairRoutingModule,
    NativeScriptCommonModule,
    AppTransModule,
    NativeScriptFormsModule,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExamsAffairModule { }
