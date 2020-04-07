import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UGHomeComponent } from './components/ug-home/ug-home.component';
const routes: Routes = [
  { path: '', component: UGHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionUGRoutingModule { }
