import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MedicalReportComponent } from './medical-report/medical-report.component.tns';
import { UnivCardComponent } from './univ-card/univ-card.component.tns';
import { AddUnivCardComponent } from './univ-card/diag/add-univ-card/add-univ-card.component.tns';
import { StudentInfoComponent } from './student-info/student-info.component.tns';

const routes: Routes = [
  {
  path: 'other',
  children: [
  { path: 'medicalreport',  component:MedicalReportComponent  },
  { path: 'universitycard',  component:UnivCardComponent  },
  { path: 'adduniversitycard',  component:AddUnivCardComponent  },
  { path :'studentinfo' ,component:StudentInfoComponent}


]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class OtherAffairRoutingModule { }
