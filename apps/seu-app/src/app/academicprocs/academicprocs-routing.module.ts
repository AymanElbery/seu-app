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


 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsRoutingModule { }
