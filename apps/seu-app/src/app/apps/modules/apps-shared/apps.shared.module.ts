import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsHeaderComponent } from './components/apps-header/apps-header.component';
import { AppsFooterComponent } from './components/apps-footer/apps-footer.component';
import { AdmisionUgService } from '../admission-ug/services/admision-ug.service';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';


@NgModule({
  declarations: [AppsHeaderComponent,AppsFooterComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule,AdmissionLazyTransModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, MatProgressSpinnerModule,AppsHeaderComponent,AppsFooterComponent]
})
export class AppsSharedModule { }
