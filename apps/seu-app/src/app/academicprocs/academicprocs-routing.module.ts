import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component';
import { SummerWithdrawComponent } from './summer-withdraw/summer-withdraw.component';
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { ExecuseRequestComponent } from './execuse-request/execuse-request.component';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component';
import { ReEenrollmentComponent } from './re-eenrollment/re-eenrollment.component';
import { ChangeMajorComponent } from './change-major/change-major.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component';import { ObjectExamComponent } from './object-exam/object-exam.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { RegisterationHelperComponent } from './registeration-helper/registeration-helper.component';
import {UnivCardComponent} from './univ-card/univ-card.component';
import {ExamExcuseComponent} from './exam-excuse/exam-excuse.component';
import { RegisterWishesComponent } from './register-wishes/register-wishes.component';
import {TerminationRequestComponent} from './termination-request/termination-request.component';
import {TrainingRequestComponent} from './training-request/training-request.component';
import { VisitorStudentComponent } from './visitor-student/visitor-student.component';

const routes: Routes = [{ path: 'procedures', component: WithdrawFromUnivComponent },
{
  path: 'procedures',
  children: [
  { path: 'withdrawuniv',  component: WithdrawFromUnivComponent },
  { path: 'postpone',  component: PostponeRequestComponent },
  { path: 'summer',  component: SummerWithdrawComponent },
  { path: 'cancelcourse',  component: CancelCourseComponent },
  { path: 'execuse',  component: ExecuseRequestComponent },
  { path: 'equalize',  component: CourseEqualizeComponent },
  { path: 'eequalize',  component: EnglishEqualizeComponent },
  { path: 'reenrol',  component: ReEenrollmentComponent },
  { path: 'changemajor',  component: ChangeMajorComponent },
  { path: 'changerequest',  component: ChangeRequestComponent },
  { path: 'objectexam',  component: ObjectExamComponent },
  { path: 'lecexecuse',  component: LecturesExecusesComponent },
  { path: 'reghelper',  component: RegisterationHelperComponent },
  {path:'universitycard',component:UnivCardComponent},
  { path:'universitycard',component:UnivCardComponent},
   {path:'examexcuse',component:ExamExcuseComponent},
  {path:'universitycard',component:UnivCardComponent},
  {path:'terminate' ,component:TerminationRequestComponent},
  {path:'training',component:TrainingRequestComponent}
  { path: 'registerwishes',  component: RegisterWishesComponent },
  { path: 'visitorstudent',  component: VisitorStudentComponent }

 

 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsRoutingModule { }
