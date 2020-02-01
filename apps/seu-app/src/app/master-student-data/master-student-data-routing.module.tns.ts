import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component.tns';

const routes: Routes = [
  { path: 'masteraff', component: AcademicStatusComponent },
{
  path: '',
  children: [
  { path: 'academicstatus',  component: AcademicStatusComponent }
 // { path: 'academicrecord',  component: AcademicRecordComponent }

 ]
}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterStudentDataRoutingModule { }
