import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Teaching_loadBlankComponent } from './components/teaching_load-blank/teaching_load-blank.component';
import { HodAllLoadsComponent } from './components/hod-all-loads/hod-all-loads.component';
import { DeanAllLoadsComponent } from './components/dean-all-loads/dean-all-loads.component';
import { HRAllLoadsComponent } from './components/hr-all-loads/hr-all-loads.component';

const routes: Routes = [
  {
    path: '',
    component: Teaching_loadBlankComponent,
    children: [
      {
        path: 'hod-all-loads',
        component: HodAllLoadsComponent
      },
      {
        path: 'dean-all-loads',
        component: DeanAllLoadsComponent
      },
      {
        path: 'hr-all-loads',
        component: HRAllLoadsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Teaching_loadRoutingModule {
}
