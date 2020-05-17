import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component.tns';
import { PrintReportComponent } from './print-report/print-report.component.tns';
import { ManagerialDutiesComponent } from './managerial-duties/managerial-duties.component.tns';
import { SalariesComponent } from './salaries/salaries.component.tns';

const routes: Routes = [
    {
    path:"personal", 
    children:[
      { path: '', component: PersonalinfoComponent },
      { path: 'print-report', component: PrintReportComponent },
      { path: 'managerial-duties', component: ManagerialDutiesComponent },
      { path: 'salaries', component: SalariesComponent },

    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class PersonalRoutingModule { }
