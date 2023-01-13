import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SalariesComponent } from './salaries/salaries.component';
import { VacationsComponent} from './vacations/vacations.component';
import {PrintReportComponent} from './print-report/print-report.component';
import { FormsModule } from '@angular/forms';
import { ManagerialDutiesComponent } from './managerial-duties/managerial-duties.component';
const routes: Routes = [

  { path: '', component: PersonalinfoComponent, data: { title: 'الخدمات الإلكترونية | بيانات الموظف' } },
  { path: 'salaries', component: SalariesComponent, data: { title: 'الخدمات الإلكترونية | الرواتب' } },
  { path: 'managerial-duties', component: ManagerialDutiesComponent , data: { title: 'الخدمات الإلكترونية | المناصب الإدارية' }},
  { path: 'vacations', component: VacationsComponent , data: { title: 'الخدمات الإلكترونية | الإجازات' }},
  { path: 'print-report', component: PrintReportComponent, data: { title: 'الخدمات الإلكترونية | طباعة تعاريف الموظف' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
