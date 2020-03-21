import { NgModule } from '@angular/core';

import { WafiRoutingModule } from './wafi-routing.module';
import { WafiHomeComponent } from './components/home/wafi-home.component';
@NgModule({
  declarations: [WafiHomeComponent],
  imports: [
    WafiRoutingModule
  ]
})
export class WafiModule { }
