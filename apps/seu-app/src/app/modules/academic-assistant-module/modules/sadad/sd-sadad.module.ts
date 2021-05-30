import { NgModule } from '@angular/core';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { RegistrationAssistantFormComponent } from './components/ticket-add-component/ticket-add.component';
import { TicketDetailsComponent } from './components/ticket-details-component/ticket-details.component';

import { SadadRoutingModule } from './sadad-routing.module';
import { AcademicAssistantSharedModule } from '../../academic-assistant-shared.module';

@NgModule({
  declarations: [
    TicketListComponent,
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ],
  imports: [
    AcademicAssistantSharedModule,
    SadadRoutingModule,
  ],
  entryComponents: [
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ]
})
export class SDSadadModule {

}
