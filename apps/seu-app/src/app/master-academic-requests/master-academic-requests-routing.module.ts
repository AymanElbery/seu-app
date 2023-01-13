import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityWithdrawalComponent } from './university-withdrawal/university-withdrawal.component';
import { TermExecuseComponent } from './term-execuse/term-execuse.component';
import { TermExecuseCoronaComponent } from './term-execuse-corona/term-execuse-corona.component';
import { StudyPostponeComponent } from './study-postpone/study-postpone.component';
import { StudyPostponeCoronaComponent } from './study-postpone-corona/study-postpone-corona.component';
import { ReEnrollComponent } from './re-enroll/re-enroll.component';
import { CancelCourseComponent } from './cancel-course/cancel-course.component';
import { ExamObjectionComponent } from './exam-objection/exam-objection.component';
import { ExamsExecusesComponent } from './exams-execuses/exams-execuses.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';
import { MasterCourseEqualizeComponent } from './course-equalize/course-equalize.component';
const routes: Routes = [
  //{ path: 'withdrawal', component: UniversityWithdrawalComponent },
  //{ path: 'studypostpone', component: StudyPostponeComponent },
  //{ path: 'reEnroll', component: ReEnrollComponent },
  {
    path: '',
    children: [
      { path: 'withdrawal', component: UniversityWithdrawalComponent, data: { title: 'الخدمات الإلكترونية | الانسحاب من الجامعة - ماجيستير' } },
      { path: 'termexecuse', component: TermExecuseComponent , data: { title: 'الخدمات الإلكترونية | الاعتذار عن الفصل - ماجيستير' }},
      { path: 'termexecuse-corona', component: TermExecuseCoronaComponent },
      { path: 'studypostpone', component: StudyPostponeComponent , data: { title: 'الخدمات الإلكترونية | تأجيل الفصل الدراسي - ماجيستير' }},
      { path: 'studypostpone-corona', component: StudyPostponeCoronaComponent},
      { path: 'reEnroll', component: ReEnrollComponent , data: { title: 'الخدمات الإلكترونية | إعادة القيد - ماجيستير' }},
      { path: 'cancelcourse', component: CancelCourseComponent , data: { title: 'الخدمات الإلكترونية | حذف مقرر دراسي - ماجيستير' }},
      { path: 'objectexam', component: ExamObjectionComponent , data: { title: 'الخدمات الإلكترونية | الاعتراض على نتيجة الاختبار النهائي - ماجيستير' }},
      { path: 'examsexecuses', component: ExamsExecusesComponent , data: { title: 'الخدمات الإلكترونية | أعذار التغيب عن الاختبارات - ماجيستير' }},
      { path: 'lecturesexecuses', component: LecturesExecusesComponent, data: { title: 'الخدمات الإلكترونية | أعذار التغيب عن المحاضرات - ماجيستير' } },
      { path: 'equalize', component: MasterCourseEqualizeComponent , data: { title: 'الخدمات الإلكترونية | معادلة المقررات - ماجيستير' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
