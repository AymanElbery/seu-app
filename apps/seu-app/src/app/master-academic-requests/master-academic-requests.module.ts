import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UniversityWithdrawalComponent} from './university-withdrawal/university-withdrawal.component';
import { MasterAcademicRequestsRoutingModule } from './master-academic-requests-routing.module';
import {AddWithdrawalRequestComponent} from './university-withdrawal/diag/add-withdrawal-request/add-withdrawal-request.component';
import {UniversityWithdrawalService} from './services/university-withdrawal.service';
import {TermExecuseComponent} from './term-execuse/term-execuse.component';
import {AddTermExecuseComponent} from './term-execuse/diag/add-term-execuse/add-term-execuse.component';
import {TermExecuseService} from './services/term-execuse.service';
@NgModule({
  declarations: [AddWithdrawalRequestComponent
    ,UniversityWithdrawalComponent
    ,AddTermExecuseComponent
    ,TermExecuseComponent
  ],
  entryComponents:[AddWithdrawalRequestComponent,
    AddTermExecuseComponent
  ],
  imports: [
    CommonModule,
    MasterAcademicRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers:[UniversityWithdrawalService,
    TermExecuseService
  ]
})
export class MasterAcademicRequestsModule { }
