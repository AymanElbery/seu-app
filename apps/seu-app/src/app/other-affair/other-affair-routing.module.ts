import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalReportComponent} from './medical-report/medical-report.component'
import {UnivCardComponent} from './univ-card/univ-card.component';
import {MissingCardComponent} from './missing-card/missing-card/missing-card.component';
import {TrainingRequestComponent} from './training-request/training-request.component';
import {AddTrainingRequestComponent} from './training-request/diag/add-training-request/add-training-request.component';
import {TrainingRequestService} from './services/training-request.service';

import { from } from 'rxjs';
const routes: Routes = [ { path: 'other', component:MedicalReportComponent  },
{
  path: 'other',
  children: [
  { path: 'medicalreport',  component:MedicalReportComponent  },
  { path: 'universitycard',  component:UnivCardComponent  },
  { path: 'missingcard',  component:MissingCardComponent  },
  { path :'training' ,component:TrainingRequestComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherAffairRoutingModule { }
