import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SalariesComponent } from './salaries/salaries.component';
import { VacationsComponent} from './vacations/vacations.component';
import {PrintReportComponent} from './print-report/print-report.component';
import { FormsModule } from '@angular/forms';
import { ManagerialDutiesComponent } from './managerial-duties/managerial-duties.component';
const routes: Routes = [

  { path: '', component: PersonalinfoComponent },
  { path: 'salaries', component: SalariesComponent },
  { path: 'managerial-duties', component: ManagerialDutiesComponent },
  { path: 'vacations', component: VacationsComponent },
  { path: 'print-report', component: PrintReportComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
