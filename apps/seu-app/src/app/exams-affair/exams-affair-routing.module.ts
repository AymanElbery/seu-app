import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import {ExamExcuseComponent} from './exam-excuse/exam-excuse.component';
import {ExamTimelineComponent} from './exam-timeline/exam-timeline.component';

const routes: Routes = [{ path: '', component: ExamsAttendStatComponent },
{
  path: '',
  children: [
  { path: 'attend',  component: ExamsAttendStatComponent },
  { path: 'attendapp',  component: ExamsAttendAppComponent },
  { path:'examexcuse' ,component:ExamExcuseComponent},
  { path:'timeline' ,component:ExamTimelineComponent},


 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsAffairRoutingModule { }
