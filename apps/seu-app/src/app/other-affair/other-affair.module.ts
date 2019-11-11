import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherAffairRoutingModule } from './other-affair-routing.module';
import {MedicalReportComponent} from './medical-report/medical-report.component';
import {MedicalReportService} from './services/medical-report.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import {UnivCardComponent} from './univ-card/univ-card.component';
import {AddUnivCardComponent} from './univ-card/diag/add-univ-card/add-univ-card.component';
import {UvnivCardService} from './services/univ-card.service';
import {MissingCardComponent} from './missing-card/missing-card/missing-card.component';
import {AddBankReceiptComponent} from './missing-card/diag/add-bank-receipt/add-bank-receipt.component';
import {AddMissingCardDataComponent} from './missing-card/diag/add-missing-card-data/add-missing-card-data.component';
import {MissingUnivCardService} from './services/missing-univ-card.service';
import {TrainingRequestComponent} from './training-request/training-request.component';
import {AddTrainingRequestComponent} from './training-request/diag/add-training-request/add-training-request.component';
import {TrainingRequestService} from './services/training-request.service';
import { StudentInfoComponent } from './student-info/student-info.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({

  declarations: [MedicalReportComponent,
    UnivCardComponent,
    AddUnivCardComponent,
    MissingCardComponent,
    AddBankReceiptComponent,
    AddMissingCardDataComponent,
    TrainingRequestComponent,
    AddTrainingRequestComponent,
    StudentInfoComponent

  ],
  entryComponents:[ AddBankReceiptComponent,
    AddMissingCardDataComponent,
    AddUnivCardComponent,
    AddTrainingRequestComponent
  ],
  imports: [
    CommonModule,
    OtherAffairRoutingModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot() ,
    MatCheckboxModule
  ],
  providers: [MedicalReportService,
    UvnivCardService,
    MissingUnivCardService,
    TrainingRequestService
    
  
  ]
})
export class OtherAffairModule { }
