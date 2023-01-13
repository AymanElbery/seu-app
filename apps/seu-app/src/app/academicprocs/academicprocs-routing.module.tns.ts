import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component.tns';
import { PostponeRequestComponent } from './postpone-request/postpone-request.component.tns';
import { ExecuseRequestComponent } from './execuse-request/execuse-request.component.tns';
import { SummerWithdrawComponent } from './summer-withdraw/summer-withdraw.component.tns';
import { ReEenrollmentComponent } from './re-eenrollment/re-eenrollment.component.tns';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';
import { AddCourseCancelComponent } from './cancel-course/diag/add-course-cancel/add-course-cancel.component.tns';
import { CourseEqualizeComponent } from './course-equalize/course-equalize.component.tns';
import { AddCourseEqualizeComponent } from './course-equalize/diag/add-course-equalize/add-course-equalize.component.tns';
import { EnglishEqualizeComponent } from './english-equalize/english-equalize.component.tns';
import { AddEnglishEqualizerComponent } from './english-equalize/diag/add-english-equalizer/add-english-equalizer.component.tns';
import { ChangeMajorComponent } from './change-major/change-major.component.tns';
import { ChangeRequestComponent } from './change-request/change-request.component.tns';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component.tns';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.tns';
import { ObjectExamComponent } from './object-exam/object-exam.component.tns';
import { AddExamObjectComponent } from './object-exam/diag/add-exam-object/add-exam-object.component.tns';
import { AbsenceQueryComponent } from './absence-query/absence-query.component.tns';
import { AddVisitorStudentComponent } from './visitor-student/diag/add-visitor-student/add-visitor-student.component.tns';
import { VisitorStudentComponent } from './visitor-student/visitor-student.component.tns';

const routes: Routes = [
  { path: '', component: WithdrawFromUnivComponent },
  {
    path: 'procedures',
    children: [
      { path: 'withdrawuniv', component: WithdrawFromUnivComponent },
      { path: 'postpone', component: PostponeRequestComponent },
      { path: 'execuse', component: ExecuseRequestComponent },
      { path: 'summer', component: SummerWithdrawComponent },
      { path: 'reenrol', component: ReEenrollmentComponent },
      { path: 'cancelcourse', component: CancelCourseComponent },
      { path:'addcancelcourse',component:AddCourseCancelComponent},
      { path: 'equalize', component: CourseEqualizeComponent },
      { path:'addequalize',component:AddCourseEqualizeComponent},
      { path: 'eequalize', component: EnglishEqualizeComponent },
      { path: 'addeequalize', component: AddEnglishEqualizerComponent },
      { path: 'changemajor', component: ChangeMajorComponent },
      { path: 'changerequest', component: ChangeRequestComponent },
      { path: 'lecexecuse', component: LecturesExecusesComponent },
      { path: 'addlecexecuse', component: AddLecturesExecusesComponent },
      { path: 'objectexam', component: ObjectExamComponent },
      { path: 'addobjectexam', component: AddExamObjectComponent },
      { path: "lectabs", component: AbsenceQueryComponent },
      { path: 'visitorstudent', component: VisitorStudentComponent },
      { path: 'addvisitorstudent', component: AddVisitorStudentComponent },







  ]}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademicprocsRoutingModule { }
