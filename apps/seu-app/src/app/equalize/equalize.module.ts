import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqualizeRoutingModule } from './equalize-routing.module';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { EnglishEqaulizeComponent } from './english-eqaulize/english-eqaulize.component';

@NgModule({
  declarations: [CourseEqualizeComponent, EnglishEqaulizeComponent],
  imports: [
    CommonModule,
    EqualizeRoutingModule
  ]
})
export class EqualizeModule { }
