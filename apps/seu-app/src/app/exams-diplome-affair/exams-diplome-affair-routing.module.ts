import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamDiplomeExcuseComponent } from './exam-excuse/exam-diplome-excuse.component';
import { ExamsDiplomeAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsDiplomeAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
import { ExamsDiplomeObjectionComponent } from './exams-objection/exams-objection.component';
const routes: Routes = [
  { path: '', component: ExamsDiplomeAttendStatComponent, data: { title: 'الخدمات الإلكترونية | شهادة حضور الإختبارات - دبلوم' } },
  {
    path: '',
    children: [
      { path:'examexcuse' , component:ExamDiplomeExcuseComponent, data: { title: 'الخدمات الإلكترونية | التغيب عن الإختبارات - دبلوم' }},
      { path: 'attendapp',  component: ExamsDiplomeAttendAppComponent, data: { title: 'الخدمات الإلكترونية | إثبات حضور الإختبارات - دبلوم' } },
      { path: 'objectexam',  component: ExamsDiplomeObjectionComponent, data: { title: 'الخدمات الإلكترونية | الإعتراض على نتيجة الإختبار - دبلوم' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsDiplomeAffairRoutingModule { }
