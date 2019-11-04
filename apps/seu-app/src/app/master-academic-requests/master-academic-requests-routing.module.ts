import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component';
import {TermExecuseComponent} from './term-execuse/term-execuse.component'; 
import { StudyPostponeComponent } from './study-postpone/study-postpone.component';
import{ReEnrollComponent} from './re-enroll/re-enroll.component';
import { CancelCourseComponent } from './cancel-course/cancel-course.component';

const routes: Routes = [
  { path: 'withdrawal', component: UniversityWithdrawalComponent },
  {path:'studypostpone',component:StudyPostponeComponent},
  {path:'reEnroll' ,component:ReEnrollComponent},
{
  path: 'academicrequests',
  children: [
  { path: 'withdrawal',  component: UniversityWithdrawalComponent },
  {path:'termexecuse' ,component:TermExecuseComponent},
  {path:'studypostpone',component:StudyPostponeComponent},
  {path:'reEnroll' ,component:ReEnrollComponent},
  {path:'cancelcourse' ,component:CancelCourseComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
