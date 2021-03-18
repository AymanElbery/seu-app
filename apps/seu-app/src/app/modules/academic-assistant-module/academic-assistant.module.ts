import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AcademicAssistantRoutingModule } from './academic-assistant-routing.module';
import { AppLazyTransModule } from '../../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeucommonModule } from '../../seucommon/seucommon.module';
import { ReqAssistantModule } from './modules/reg-assistant/reg-assistant.module'

@NgModule({
  declarations: [
  ],
  imports: [
    ReqAssistantModule,
    AcademicAssistantRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SeucommonModule
  ],
  entryComponents: []
})
export class AcademicAssistantModule { }
