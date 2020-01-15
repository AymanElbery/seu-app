import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterCoursesRoutingModule } from './register-courses-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RegisterWishesComponent } from './register-wishes/register-wishes.component.tns';
import { AppTransModule } from '../app.trans.module.tns';


@NgModule({
  declarations: [RegisterWishesComponent],
  imports: [
    RegisterCoursesRoutingModule,
    NativeScriptCommonModule,
    AppTransModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterCoursesModule { }
