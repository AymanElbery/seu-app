import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import {ExamExcuseComponent} from './exam-excuse/exam-excuse.component';
const routes: Routes = [{ path: 'exams', component: ExamsAttendStatComponent },
{
  path: 'exams',
  children: [
  { path: 'attend',  component: ExamsAttendStatComponent },
  { path: 'attendapp',  component: ExamsAttendAppComponent },
  { path:'examexcuse' ,component:ExamExcuseComponent}


 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsAffairRoutingModule { }
