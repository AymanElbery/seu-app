import { NgModule } from '@angular/core';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { SDExamsFormComponent } from './components/ticket-add-component/ticket-add.component';
import { SDExamsTicketDetailsComponent } from './components/ticket-details-component/ticket-details.component';
import { SDCommonModule } from '../sd-common/sd-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

import { SDExamsRoutingModule } from './sd-exams-routing.module';

@NgModule({
  declarations: [
    TicketListComponent,
    SDExamsFormComponent,
    SDExamsTicketDetailsComponent
  ],
  imports: [
    SeucommonModule,
    SDCommonModule,
    SDExamsRoutingModule,
  ],
  entryComponents: [
    SDExamsFormComponent,
    SDExamsTicketDetailsComponent
  ]
})
export class SDExamstModule {

}
