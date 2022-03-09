import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamDiplomeExcuseComponent } from './exam-excuse/exam-diplome-excuse.component';
import { ExamsDiplomeAttendStatComponent } from './exams-attend-stat/exams-attend-stat.component';
import { ExamsDiplomeAttendAppComponent } from './exams-attend-app/exams-attend-app.component';
const routes: Routes = [
  { path: '', component: ExamsDiplomeAttendStatComponent },
  {
    path: '',
    children: [
      { path:'examexcuse' , component:ExamDiplomeExcuseComponent},
      { path: 'attendapp',  component: ExamsDiplomeAttendAppComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsDiplomeAffairRoutingModule { }
