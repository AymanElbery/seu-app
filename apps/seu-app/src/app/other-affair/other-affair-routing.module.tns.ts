import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MedicalReportComponent } from './medical-report/medical-report.component.tns';

const routes: Routes = [
  {
  path: 'other',
  children: [
  { path: 'medicalreport',  component:MedicalReportComponent  }
]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class OtherAffairRoutingModule { }
