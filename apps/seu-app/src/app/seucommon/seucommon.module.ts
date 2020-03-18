import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeuLoaderComponent } from '../seucommon/seu-loader/seu-loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PrintButtonDirective } from './print-button.directive';
import { ServiceHeaderComponent } from './service-header/service-header.component';
import { AppTransModule } from '../app.trans.module';

@NgModule({
  declarations: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent]
})
export class SeucommonModule { }
