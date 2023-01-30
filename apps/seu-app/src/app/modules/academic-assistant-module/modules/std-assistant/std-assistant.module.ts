import { NgModule } from '@angular/core';
import { StdAssistantRoutingModule } from './std-assistant-routing.module';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { SDCommonModule } from '../sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
    StdAssistantRoutingModule,
  ],
  entryComponents: [
  ]
})
export class StdAssistantModule {

}
