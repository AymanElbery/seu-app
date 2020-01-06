import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalReportComponent} from './medical-report/medical-report.component'
import {UnivCardComponent} from './univ-card/univ-card.component';
import {MissingCardComponent} from './missing-card/missing-card/missing-card.component';
import {TrainingRequestComponent} from './training-request/training-request.component';
import {AddTrainingRequestComponent} from './training-request/diag/add-training-request/add-training-request.component';
import {TrainingRequestService} from './services/training-request.service';

import { from } from 'rxjs';
import { StudentInfoComponent } from './student-info/student-info.component';
const routes: Routes = [ { path: '', component:MedicalReportComponent  },
{
  path: '',
  children: [
  { path: 'medicalreport',  component:MedicalReportComponent  },
  { path: 'universitycard',  component:UnivCardComponent  },
  { path: 'missingcard',  component:MissingCardComponent  },
  { path :'training' ,component:TrainingRequestComponent},
  { path :'studentinfo' ,component:StudentInfoComponent}


  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherAffairRoutingModule { }
