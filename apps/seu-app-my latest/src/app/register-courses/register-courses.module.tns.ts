import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterCoursesRoutingModule } from './register-courses-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FreshmenWishesComponent } from './freshmen-wishes/freshmen-wishes.component';
import { RegisterHelpComponent } from './register-help/register-help.component';

@NgModule({
  declarations: [FreshmenWishesComponent, RegisterHelpComponent],
  imports: [
    RegisterCoursesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterCoursesModule { }
