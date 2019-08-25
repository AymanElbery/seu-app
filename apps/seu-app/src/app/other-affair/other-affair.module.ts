import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherAffairRoutingModule } from './other-affair-routing.module';
import { UniversityIDComponent } from './university-id/university-id.component';
import { IDReplacementComponent } from './idreplacement/idreplacement.component';

@NgModule({
  declarations: [UniversityIDComponent, IDReplacementComponent],
  imports: [
    CommonModule,
    OtherAffairRoutingModule
  ]
})
export class OtherAffairModule { }
