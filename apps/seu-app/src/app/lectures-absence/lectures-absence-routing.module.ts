import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';

const routes: Routes = [  { path: 'lecabsence', component: MedicalReportComponent },
{
  path: 'lecabsence',
  children: [
  { path: 'medicalreport',  component: MedicalReportComponent },
  { path: 'lectabs',  component: AbsenceQueryComponent},

 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturesAbsenceRoutingModule { }
