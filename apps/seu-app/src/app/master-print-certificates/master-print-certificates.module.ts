import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MasterPrintCertificatesRoutingModule } from './master-print-certificates-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterPrintCertificatesRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ]
})
export class MasterPrintCertificatesModule { }
