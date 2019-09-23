import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuitionFeesStatComponent } from './tuition-fees-stat/tuition-fees-stat.component';

const routes: Routes = [
  { path: 'finance', component: TuitionFeesStatComponent },
  {
    path: 'finance',
    children: [
    { path: 'fees',  component: TuitionFeesStatComponent }

   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceAffairRoutingModule { }
