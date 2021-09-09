import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicAffairsModule } from './modules/academic-affairs/academic-affairs.module'

const routes: Routes = [
  {
    path: 'academic-affairs',
    loadChildren: './modules/academic-affairs/academic-affairs.module#AcademicAffairsModule',
  },
  {
    path: 'academic-procedures',
    loadChildren: './modules/academic-procedures/academic-procedures.module#AcademicProceduresModule',
  },
  {
    path: 'financial-affairs',
    loadChildren: './modules/financial-affairs/financial-affairs.module#FinancialAffairsModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AcademicAffairsModule],
  exports: [RouterModule]
})
export class DiplomeRoutingModule { }
