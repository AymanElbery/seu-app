import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import {ExamExcuseComponent} from './exam-excuse/exam-excuse.component';
import {ExamTimelineComponent} from './exam-timeline/exam-timeline.component';

const routes: Routes = [{ path: '', component: ExamsAttendStatComponent, data: { title: 'الخدمات الإلكترونية | شهادة حضور إختبارات - بكالوريوس' } },
{
  path: '',
  children: [
  { path: 'attend',  component: ExamsAttendStatComponent, data: { title: 'الخدمات الإلكترونية | شهادة حضور إختبارات - بكالوريوس' } },
  { path: 'attendapp',  component: ExamsAttendAppComponent, data: { title: 'الخدمات الإلكترونية | إثبات حضور إختبارات - بكالوريوس' }  },
  { path:'examexcuse' ,component:ExamExcuseComponent, data: { title: 'الخدمات الإلكترونية | رفع الأعذار للإختبارات - بكالوريوس' } },
  { path:'timeline' ,component:ExamTimelineComponent , data: { title: 'الخدمات الإلكترونية | الإختبارات النهائية' }},


 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsAffairRoutingModule { }
