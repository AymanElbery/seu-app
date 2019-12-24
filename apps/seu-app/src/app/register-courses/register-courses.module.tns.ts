import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterCoursesRoutingModule } from './register-courses-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    RegisterCoursesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterCoursesModule { }
