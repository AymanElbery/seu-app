import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalReportComponent} from './medical-report/medical-report.component'
import {UnivCardComponent} from './univ-card/univ-card.component';
import {MissingCardComponent} from './missing-card/missing-card/missing-card.component';
const routes: Routes = [ { path: 'other', component:MedicalReportComponent  },
{
  path: 'other',
  children: [
  { path: 'medicalreport',  component:MedicalReportComponent  },
  { path: 'universitycard',  component:UnivCardComponent  },
  { path: 'missingcard',  component:MissingCardComponent  }

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherAffairRoutingModule { }
