import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrnsComponent } from './components/crns-component/crns.component';
import { CodeComponent } from './components/code-component/code.component';
import { ReportComponent } from './components/report-component/report.component';

const routes: Routes = [
  {
    path: "",
    component: CrnsComponent
  },
  {
    path: "crns",
    component: CrnsComponent
  },
  { 
    path: 'code', 
    component: CodeComponent 
  },
  { 
    path: 'report', 
    component: ReportComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
