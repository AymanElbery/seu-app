import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { UniversityAgencyComponent } from './university-agency/university-agency.component';
import { UniversityAgencyGrComponent } from './university-agency-gr/university-agency-gr.component';
import { UniversityAgencyAllComponent } from './university-agency-all/university-agency-all.component';
import { UniversityAgencyCampComponent } from './university-agency-camp/university-agency-camp.component';
import { UniversityAgencyFemaleComponent } from './university-agency-female/university-agency-female.component';
import { UniversityEducationalAffairsComponent } from './university-educational-affairs/university-educational-affairs.component';

const routes: Routes = [
  { path: 'university', component: UniversityComponent, data: { title: 'الخدمات الإلكترونية | رئاسة الجامعة' } },
  { path: 'university-agency', component: UniversityAgencyComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة للتخطيط و التطوير و الجودة' } },
  { path: 'university-agency-gr', component: UniversityAgencyGrComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة للدراسات العليا و البحث العلمي' } },
  { path: 'university-educational-affairs', component: UniversityEducationalAffairsComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة للشؤون التعليمية' } },
  { path: 'university-agency-all', component: UniversityAgencyAllComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة' } },
  { path: 'university-agency-camp', component: UniversityAgencyCampComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة لشؤون الفروع' } },
  { path: 'university-agency-female', component: UniversityAgencyFemaleComponent, data: { title: 'الخدمات الإلكترونية | وكالة الجامعة لشؤون الطالبات' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureGuideRoutingModule { }
