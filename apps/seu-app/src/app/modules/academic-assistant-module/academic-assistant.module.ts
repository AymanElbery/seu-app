import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AcademicAssistantRoutingModule } from './academic-assistant-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReqAssistantModule } from './modules/reg-assistant/reg-assistant.module'
import { TranslateService } from '@ngx-translate/core';
import { SDCommonModule } from './modules/sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
    AcademicAssistantRoutingModule,
  ],
  entryComponents: []
})
export class AcademicAssistantModule {

}
