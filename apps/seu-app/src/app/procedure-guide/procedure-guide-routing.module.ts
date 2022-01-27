import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { UniversityAgencyComponent } from './university-agency/university-agency.component';
import { UniversityAgencyGrComponent } from './university-agency-gr/university-agency-gr.component';
import { UniversityAgencyAllComponent } from './university-agency-all/university-agency-all.component';
import { UniversityEducationalAffairsComponent } from './university-educational-affairs/university-educational-affairs.component';

const routes: Routes = [
  { path: 'university', component: UniversityComponent },
  { path: 'university-agency', component: UniversityAgencyComponent },
  { path: 'university-agency-gr', component: UniversityAgencyGrComponent },
  { path: 'university-educational-affairs', component: UniversityEducationalAffairsComponent },
  { path: 'university-agency-all', component: UniversityAgencyAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureGuideRoutingModule { }
