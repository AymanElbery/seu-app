import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsHeaderComponent } from './components/apps-header/apps-header.component';
import { AppsFooterComponent } from './components/apps-footer/apps-footer.component';
import { AdmissionLazyTransModule } from '../../admission.lazytrans.module';
import { AppsServiceHeaderComponent } from './components/apps-service-header/apps-service-header.component';


@NgModule({
  declarations: [AppsHeaderComponent, AppsFooterComponent, AppsServiceHeaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule, ReactiveFormsModule, AdmissionLazyTransModule
  ],
  exports: [FormsModule, AppsServiceHeaderComponent, ReactiveFormsModule, CommonModule, AdmissionLazyTransModule, MatProgressSpinnerModule, AppsHeaderComponent, AppsFooterComponent]
})
export class AppsSharedModule { }
