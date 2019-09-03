import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GraduatesAffairsRoutingModule } from './graduates-affairs-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';

@NgModule({
  declarations: [GraduateStateComponent],
  imports: [
    GraduatesAffairsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GraduatesAffairsModule { }
