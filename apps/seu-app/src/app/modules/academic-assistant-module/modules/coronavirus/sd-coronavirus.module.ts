import { NgModule } from '@angular/core';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { RegistrationAssistantFormComponent } from './components/ticket-add-component/ticket-add.component';
import { TicketDetailsComponent } from './components/ticket-details-component/ticket-details.component';

import { CoronavirusRoutingModule } from './coronavirus-routing.module';
import { AcademicAssistantSharedModule } from '../../academic-assistant-shared.module';

@NgModule({
  declarations: [
    TicketListComponent,
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ],
  imports: [
    AcademicAssistantSharedModule,
    CoronavirusRoutingModule,
  ],
  entryComponents: [
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ]
})
export class SDCoronavirusModule {

}
