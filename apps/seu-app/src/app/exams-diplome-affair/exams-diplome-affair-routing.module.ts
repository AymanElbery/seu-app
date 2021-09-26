import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamDiplomeExcuseComponent } from './exam-excuse/exam-diplome-excuse.component';
const routes: Routes = [
  { path: '', component: ExamDiplomeExcuseComponent },
  {
    path: '',
    children: [
      { path:'examexcuse' , component:ExamDiplomeExcuseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsDiplomeAffairRoutingModule { }
