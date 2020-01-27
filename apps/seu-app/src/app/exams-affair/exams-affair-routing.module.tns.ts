import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamExcuseComponent } from './exam-excuse/exam-excuse.component.tns';
import { AddExamExcuseComponent } from './exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.tns';

const routes: Routes = [ // { path: 'exams', component: ExamsAttendStatComponent },
{
  path: 'exams',
  children: [
  { path:'examexcuse' ,component:ExamExcuseComponent},
  { path:'addexamexcuse' ,component:AddExamExcuseComponent}


 ]
}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ExamsAffairRoutingModule { }
