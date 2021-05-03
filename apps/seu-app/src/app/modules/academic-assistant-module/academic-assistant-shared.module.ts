import { NgModule } from '@angular/core';
import { SDCommonModule } from './modules/sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';
import { SDRequestNoteComponent } from './components/ticket-note-component/ticket-note.component';

@NgModule({
  declarations: [
    SDRequestNoteComponent
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
  ],
  exports: [
    SeucommonModule,
    SDCommonModule,
    SDRequestNoteComponent
  ]
})
export class AcademicAssistantSharedModule {

}