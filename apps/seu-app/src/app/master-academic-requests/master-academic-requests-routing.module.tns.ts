import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component.tns';
import { ExamObjectionComponent } from './exam-objection/exam-objection.component.tns';
import { AddObjectExamComponent } from './exam-objection/diag/add-object-exam/add-object-exam.component.tns';
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component.tns';
import { AddExamExecuseComponent } from './exams-execuses/diag/add-exam-execuse/add-exam-execuse.component.tns';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component.tns';
import { AddLecturesExecusesComponent } from './lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.tns';
import { ReEnrollComponent } from './re-enroll/re-enroll.component.tns';
import { AddReEnrollComponent } from './re-enroll/diag/add-re-enroll/add-re-enroll.component.tns';
import { StudyPostponeComponent } from './study-postpone/study-postpone.component.tns';
import { TermExecuseComponent } from './term-execuse/term-execuse.component.tns';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component.tns';

const routes: Routes = [

  {
    path: 'academicrequests',
    children: [
      { path: 'cancelcourse', component: CancelCourseComponent },
      { path: 'addcancelcourse', component: AddCancelCourseRequestComponent },
      { path: 'objectexam', component: ExamObjectionComponent },
      { path: 'addobjectexam', component: AddObjectExamComponent },
      { path: 'examsexecuses', component: ExamsExecusesComponent },
      { path: 'addexamsexecuses', component: AddExamExecuseComponent },
      { path: 'lecturesexecuses', component: LecturesExecusesComponent },
      { path: 'addlecturesexecuses', component: AddLecturesExecusesComponent },
      { path: 'reEnroll', component: ReEnrollComponent },
      { path: 'addreEnroll', component: AddReEnrollComponent },
      { path: 'studypostpone', component: StudyPostponeComponent },
      { path: 'termexecuse', component: TermExecuseComponent },
      { path: 'withdrawal', component: UniversityWithdrawalComponent },



    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
