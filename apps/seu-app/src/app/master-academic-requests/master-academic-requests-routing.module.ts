import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component';
import {TermExecuseComponent} from './term-execuse/term-execuse.component'; 
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
<<<<<<< HEAD
import{ExamObjectionComponent} from './exam-objection/exam-objection.component';
import{AddObjectExamComponent} from './exam-objection/diag/add-object-exam/add-object-exam.component';
const routes: Routes = [
  { path: 'withdrawal', component: UniversityWithdrawalComponent },
  {path:'studypostpone',component:StudyPostponeComponent},
  {path:'reEnroll' ,component:ReEnrollComponent},
  {path:'examObject' , component:ExamObjectionComponent},

=======
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component';
import {LecturesExecusesComponent} from './lectures-execuses/lectures-execuses.component';
const routes: Routes = [
  { path: 'withdrawal', component: UniversityWithdrawalComponent },
>>>>>>> 5374cb0645610d978091338f8958fdd119714393
{
  path: 'academicrequests',
  children: [
  { path: 'withdrawal',  component: UniversityWithdrawalComponent },
<<<<<<< HEAD
  {path:'termexecuse' ,component:TermExecuseComponent},
  {path:'studypostpone',component:StudyPostponeComponent},
  {path:'reEnroll' ,component:ReEnrollComponent},
  {path:'cancelcourse' ,component:CancelCourseComponent},
  {path:'objectexam' , component:ExamObjectionComponent},
=======
  { path:'termexecuse' ,component:TermExecuseComponent},
  { path:'cancelcourse' ,component:CancelCourseComponent},
  { path:'examsexecuses' ,component:ExamsExecusesComponent},
  { path:'lecturesexecuses' ,component:LecturesExecusesComponent} 
>>>>>>> 5374cb0645610d978091338f8958fdd119714393
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
