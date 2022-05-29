import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component';
import { PostponeCoronaRequestComponent } from './postpone-request-corona/postpone-request-corona.component';
import { ChangeScheduleComponent } from './change-schedule-request/change-schedule-request.component';
import { SummerWithdrawComponent } from './summer-withdraw/summer-withdraw.component';
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { ExecuseRequestComponent } from './execuse-request/execuse-request.component';
import { ExecuseRequestCoronaComponent } from './execuse-request-corona/execuse-request-corona.component';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component';
import { ReEenrollmentComponent } from './re-eenrollment/re-eenrollment.component';
import { ChangeMajorComponent } from './change-major/change-major.component';
import { ChangeCampMajorComponent } from './change-camp-major/change-camp-major.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component';
import { ObjectExamComponent } from './object-exam/object-exam.component';
import { ExamObjectComponent } from './exam-object/exam-object.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { TerminationRequestComponent } from './termination-request/termination-request.component';
import { VisitorStudentComponent } from './visitor-student/visitor-student.component';
import { AbsenceQueryComponent } from './absence-query/absence-query.component';

const routes: Routes = [{ path: '', component: WithdrawFromUnivComponent },
{
  path: '',
  children: [
    { path: 'withdrawuniv', component: WithdrawFromUnivComponent },
    { path: 'change-schedule', component: ChangeScheduleComponent },
    { path: 'postpone', component: PostponeRequestComponent },
    { path: 'postpone-corona', component: PostponeCoronaRequestComponent },
    { path: 'summer', component: SummerWithdrawComponent },
    { path: 'cancelcourse', component: CancelCourseComponent },
    { path: 'execuse', component: ExecuseRequestComponent },
    { path: 'execuse-corona', component: ExecuseRequestCoronaComponent },
    { path: 'equalize', component: CourseEqualizeComponent },
    { path: 'eequalize', component: EnglishEqualizeComponent },
    { path: 'reenrol', component: ReEenrollmentComponent },
    { path: 'changemajor', component: ChangeMajorComponent },
    { path: 'changerequest', component: ChangeRequestComponent },
    { path: 'change-camp-major', component: ChangeCampMajorComponent },
    { path: 'objectexam', component: ObjectExamComponent },
    { path: 'exam-object', component: ExamObjectComponent },
    { path: 'lecexecuse', component: LecturesExecusesComponent },
    { path: 'terminate', component: TerminationRequestComponent },
    { path: 'visitorstudent', component: VisitorStudentComponent },
    { path: "lectabs", component: AbsenceQueryComponent }



  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsRoutingModule { }
