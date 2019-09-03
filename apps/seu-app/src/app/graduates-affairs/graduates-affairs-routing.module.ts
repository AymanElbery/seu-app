import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';

const routes: Routes = [

  { path: 'graduates', component: GraduateStateComponent },
  {
    path: 'graduates',
    children: [
    { path: 'statement',  component: GraduateStateComponent }

   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduatesAffairsRoutingModule { }
