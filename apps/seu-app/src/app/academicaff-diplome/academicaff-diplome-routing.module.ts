import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicDiplomeStatusComponent } from './academic-diplome-status/academic-diplome-status.component';
import { AcademicRecordDiplomeComponent } from './academic-diplome-record/academic-diplome-record.component';
import { UDGuard } from '../guards/ud.guard';

const routes: Routes = [

  { path: '', component: AcademicDiplomeStatusComponent, data: { title: 'الخدمات الإلكترونية | الحالة الأكاديمية - دبلوم' } },
  { path: 'status', component: AcademicDiplomeStatusComponent , canActivate: [UDGuard], data: { title: 'الخدمات الإلكترونية | الحالة الأكاديمية - دبلوم' }},
  { path: 'record', component: AcademicRecordDiplomeComponent , canActivate: [UDGuard], data: { title: 'الخدمات الإلكترونية | السجل الأكاديمي - دبلوم' }},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicaffDiplomeRoutingModule { }
