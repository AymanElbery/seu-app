import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component';
import {TermExecuseComponent} from './term-execuse/term-execuse.component'; 
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component';
import {LecturesExecusesComponent} from './lectures-execuses/lectures-execuses.component';
const routes: Routes = [
  { path: 'withdrawal', component: UniversityWithdrawalComponent },
{
  path: 'academicrequests',
  children: [
  { path: 'withdrawal',  component: UniversityWithdrawalComponent },
  { path:'termexecuse' ,component:TermExecuseComponent},
  { path:'cancelcourse' ,component:CancelCourseComponent},
  { path:'examsexecuses' ,component:ExamsExecusesComponent},
  { path:'lecturesexecuses' ,component:LecturesExecusesComponent} 
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
