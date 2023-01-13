import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MedicalReportComponent } from './medical-report/medical-report.component.tns';
import { AppTransModule } from '../app.trans.module.tns';
import { UnivCardComponent } from './univ-card/univ-card.component.tns';
import { AddUnivCardComponent } from './univ-card/diag/add-univ-card/add-univ-card.component.tns';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { OtherAffairRoutingModule } from './other-affair-routing.module.tns';
import { StudentInfoComponent } from './student-info/student-info.component.tns';
import { TrainingRequestComponent } from './training-request/training-request.component.tns';
import { AddTrainingRequestComponent } from './training-request/diag/add-training-request/add-training-request.component.tns';
import { HeaderModule } from '../shared/header.module.tns';


@NgModule({
  declarations: [
    MedicalReportComponent,
    UnivCardComponent,
    AddUnivCardComponent,
    StudentInfoComponent,
    TrainingRequestComponent,
    AddTrainingRequestComponent
  ],
  imports: [
    OtherAffairRoutingModule,
    NativeScriptCommonModule,
    AppTransModule,
    NativeScriptFormsModule,
    HeaderModule

  ],
  entryComponents:[
    AddTrainingRequestComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OtherAffairModule { }
