import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrnsComponent } from './components/crns-component/crns.component';
import { CodeComponent } from './components/code-component/code.component';

const routes: Routes = [
  {
    path: "",
    component: CrnsComponent
  },
  {
    path: "crns",
    component: CrnsComponent
  },
  { 
    path: 'code', 
    component: CodeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StdAttendanceRoutingModule { }
