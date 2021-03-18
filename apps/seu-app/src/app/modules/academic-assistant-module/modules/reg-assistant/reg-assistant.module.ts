import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RegAssistantRoutingModule } from './reg-assistant-routing.module';
import { AppLazyTransModule } from '../../../../app.lazytrans.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeucommonModule } from '../../../../seucommon/seucommon.module';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';

@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    RegAssistantRoutingModule,
    AppLazyTransModule,
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SeucommonModule
  ],
  entryComponents: [TicketListComponent]
})
export class ReqAssistantModule { }
