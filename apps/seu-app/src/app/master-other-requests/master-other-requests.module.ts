import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MasterOtherRequestsRoutingModule } from './master-other-requests-routing.module';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';
import { AbseneQueryService } from './services/absene-query.service';


@NgModule({
  declarations: [AbsenceQueryComponent],
  imports: [
    CommonModule,
    MasterOtherRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [AbseneQueryService]
})
export class MasterOtherRequestsModule { }
