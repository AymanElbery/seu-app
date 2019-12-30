import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';

const routes: Routes = [  { path: 'exams', component: ExamsAttendStatComponent },
{
  path: 'academicaff',
  children: [
  { path: 'attend',  component: ExamsAttendStatComponent },

 ]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ExamsAffairRoutingModule { }
