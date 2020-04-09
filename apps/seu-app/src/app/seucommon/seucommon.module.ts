import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeuLoaderComponent } from '../seucommon/seu-loader/seu-loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PrintButtonDirective } from './print-button.directive';
import { ServiceHeaderComponent } from './service-header/service-header.component';
import { AppTransModule } from '../app.trans.module';
import { DialogPlayerComponent } from './dialog-player/dialog-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent,DialogPlayerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [DialogPlayerComponent],
  exports: [SeuLoaderComponent, PrintButtonDirective, ServiceHeaderComponent]
})
export class SeucommonModule { }
