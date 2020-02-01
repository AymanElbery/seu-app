import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';
import { AcademicRecordComponent } from './academic-record/academic-record.component.tns';

const routes: Routes = [
  { path: 'masteraff', component: AcademicStatusComponent },
{
  path: 'masteraff',
  children: [
  { path: 'stdata',  component: AcademicStatusComponent }
  { path: 'academicrecord',  component: AcademicRecordComponent }

 // { path: 'academicrecord',  component: AcademicRecordComponent }

 ]
}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterStudentDataRoutingModule { }
