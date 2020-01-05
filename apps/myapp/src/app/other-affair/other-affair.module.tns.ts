import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { OtherAffairRoutingModule } from './other-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    OtherAffairRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OtherAffairModule { }
