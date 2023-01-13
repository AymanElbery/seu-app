import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { InfoUpdateComponent } from '../master-student-data/info-update/info-update.component';
import { MasterStudentGradesComponent } from './student_grades/student-grades.component'
const routes: Routes = [{ path: '', component: AcademicStatusComponent },
{
  path: '',
  children: [
    { path: 'academicstatus', component: AcademicStatusComponent, data: { title: 'الخدمات الإلكترونية | الحالة الأكاديمية - ماجيستير' } },
    { path: 'academicrecord', component: AcademicRecordComponent, data: { title: 'الخدمات الإلكترونية | السجل الأكاديمي - ماجيستير' } },
    { path: 'info-update', component: InfoUpdateComponent, data: { title: 'الخدمات الإلكترونية | ' } },
    { path: 'grades', component: MasterStudentGradesComponent, data: { title: 'الخدمات الإلكترونية | التقديرات قبل حساب المعدل - ماجيستير' } }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStudentDataRoutingModule { }
