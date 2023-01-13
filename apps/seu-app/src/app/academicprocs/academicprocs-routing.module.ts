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
    { path: 'withdrawuniv', component: WithdrawFromUnivComponent, data: { title: 'الخدمات الإلكترونية | الانسحاب من الجامعة - بكالوريوس' } },
    { path: 'change-schedule', component: ChangeScheduleComponent , data: { title: 'الخدمات الإلكترونية | تغيير الجدول الدراسي - بكالوريوس' } },
    { path: 'postpone', component: PostponeRequestComponent, data: { title: 'الخدمات الإلكترونية | تأجيل الفصل الدراسي - بكالوريوس' } },
    { path: 'postpone-corona', component: PostponeCoronaRequestComponent },
    { path: 'summer', component: SummerWithdrawComponent, data: { title: 'الخدمات الإلكترونية | الاعتذار عن الفصل الصيفي - بكالوريوس' } },
    { path: 'cancelcourse', component: CancelCourseComponent  , data: { title: 'الخدمات الإلكترونية | حذف مقرر دراسي - بكالوريوس' }},
    { path: 'execuse', component: ExecuseRequestComponent , data: { title: 'الخدمات الإلكترونية | الاعتذار عن فصل دراسي - بكالوريوس' }},
    { path: 'execuse-corona', component: ExecuseRequestCoronaComponent },
    { path: 'equalize', component: CourseEqualizeComponent, data: { title: 'الخدمات الإلكترونية | معادلة المقررات - بكالوريوس' } },
    { path: 'eequalize', component: EnglishEqualizeComponent, data: { title: 'الخدمات الإلكترونية | معادلة اللغة الإنجليزية - بكالوريوس' } },
    { path: 'reenrol', component: ReEenrollmentComponent, data: { title: 'الخدمات الإلكترونية | إعادة القيد - بكالوريوس' } },
    { path: 'changemajor', component: ChangeMajorComponent, data: { title: 'الخدمات الإلكترونية | تغيير التخصص - بكالوريوس' } },
    { path: 'changerequest', component: ChangeRequestComponent, data: { title: 'الخدمات الإلكترونية | تغيير الفرع - بكالوريوس' } },
    { path: 'change-camp-major', component: ChangeCampMajorComponent , data: { title: 'الخدمات الإلكترونية | تغيير الفرع و التخصص - بكالوريوس' } },
    { path: 'objectexam', component: ObjectExamComponent },
    { path: 'exam-object', component: ExamObjectComponent, data: { title: 'الخدمات الإلكترونية | الاعتراض على نتيجة الاختبار النهائي - بكالوريوس' }  },
    { path: 'lecexecuse', component: LecturesExecusesComponent, data: { title: 'الخدمات الإلكترونية | رفع أعذار التغيب عن المحاضرات - بكالوريوس' } },
    { path: 'terminate', component: TerminationRequestComponent },
    { path: 'visitorstudent', component: VisitorStudentComponent , data: { title: 'الخدمات الإلكترونية | الدراسة كطالب زائر - بكالوريوس' } },
    { path: "lectabs", component: AbsenceQueryComponent, data: { title: 'الخدمات الإلكترونية | الاستعلام عن الغيابات - بكالوريوس' } }



  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsRoutingModule { }
