import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { OtherAffairRoutingModule } from './other-affair-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { UniversityIdComponent } from './university-id/university-id.component';
import { IdreplacementComponent } from './idreplacement/idreplacement.component';

@NgModule({
  declarations: [UniversityIdComponent, IdreplacementComponent],
  imports: [
    OtherAffairRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OtherAffairModule { }
