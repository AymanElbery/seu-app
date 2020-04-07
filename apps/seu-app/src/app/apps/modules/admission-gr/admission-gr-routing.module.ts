import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GRHomeComponent } from './components/gr-home/gr-home.component';
const routes: Routes = [
  { path: '', component: GRHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionGRRoutingModule { }
