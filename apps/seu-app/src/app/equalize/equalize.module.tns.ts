import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { EqualizeRoutingModule } from './equalize-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { EnglishEqaulizeComponent } from './english-eqaulize/english-eqaulize.component';

@NgModule({
  declarations: [CourseEqualizeComponent, EnglishEqaulizeComponent],
  imports: [
    EqualizeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EqualizeModule { }
