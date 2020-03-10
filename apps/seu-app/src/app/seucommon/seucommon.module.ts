import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SeuLoaderComponent} from '../seucommon/seu-loader/seu-loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PrintButtonDirective } from './print-button.directive';

@NgModule({
  declarations: [SeuLoaderComponent, PrintButtonDirective],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports : [SeuLoaderComponent,PrintButtonDirective]
})
export class SeucommonModule { }
