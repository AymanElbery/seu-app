import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { FormsModule } from '@angular/forms';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import { SkillsRecordService } from './services/skills-record.service';
import { SkillsRecordComponent } from './skills-record/skills-record.component';
import { UGGuard } from '../guards/ug.guard';
import { StudentGradesComponent } from './student_grades/student-grades.component';
import { GraduateAddressComponent } from './graduate-address/graduate-address.component';

const routes: Routes = [

  { path: '', component: AcademicStatusComponent, data: { title: 'الخدمات الإلكترونية | الحالة الأكاديمية - بكالوريوس' } },
  { path: 'status', component: AcademicStatusComponent, data: { title: 'الخدمات الإلكترونية | الحالة الأكاديمية - بكالوريوس' } },
  { path: 'certificate', component: CertificateIDComponent },
  { path: 'record', component: AcademicRecordComponent , data: { title: 'الخدمات الإلكترونية | السجل الأكاديمي - بكالوريوس' }},
  { path: 'graduationstatment', component: GraduateStateComponent },
  { path: 'graduataddress', component: GraduateAddressComponent, data: { title: 'الخدمات الإلكترونية | عنوان خريج - بكالوريوس' }  },
  { path: 'skills', component: SkillsRecordComponent, canActivate: [UGGuard] },
  { path: 'grades', component: StudentGradesComponent, canActivate: [UGGuard] , data: { title: 'الخدمات الإلكترونية | التقديرات قبل حساب المعدل - بكالوريوس' }},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicaffRoutingModule { }
