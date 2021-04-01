import { NgModule } from '@angular/core';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { RegistrationAssistantFormComponent } from './components/ticket-add-component/ticket-add.component';
import { TicketDetailsComponent } from './components/ticket-details-component/ticket-details.component';
import { SDCommonModule } from '../sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

import { AcademicRequestsRoutingModule } from './academic-requests-routing.module';

@NgModule({
  declarations: [
    TicketListComponent,
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
    AcademicRequestsRoutingModule,
  ],
  entryComponents: [
    RegistrationAssistantFormComponent,
    TicketDetailsComponent
  ]
})
export class SDAcademicRequeststModule {

}
