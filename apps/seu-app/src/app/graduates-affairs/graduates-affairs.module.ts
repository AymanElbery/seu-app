import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduatesAffairsRoutingModule } from './graduates-affairs-routing.module';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import { GraduatesStateService } from './services/graduates-state.service';

@NgModule({
  declarations: [GraduateStateComponent],
  imports: [
    CommonModule,
    GraduatesAffairsRoutingModule
  ],
  providers: [GraduatesStateService]

})
export class GraduatesAffairsModule { }
