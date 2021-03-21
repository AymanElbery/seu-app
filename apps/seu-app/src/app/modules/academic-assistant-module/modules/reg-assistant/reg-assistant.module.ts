import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegAssistantRoutingModule } from './reg-assistant-routing.module';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { RegistrationAssistantFormComponent } from './components/ticket-add-component/ticket-add.component';
import { SDCommonModule } from '../sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
    TicketListComponent, RegistrationAssistantFormComponent
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
    RegAssistantRoutingModule,
  ],
  entryComponents: [RegistrationAssistantFormComponent]
})
export class ReqAssistantModule {

}
