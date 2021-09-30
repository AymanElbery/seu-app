import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Teaching_loadBlankComponent } from './components/teaching_load-blank/teaching_load-blank.component';
import { HodAllLoadsComponent } from './components/hod-all-loads/hod-all-loads.component';

const routes: Routes = [
  {
    path: '',
    component: Teaching_loadBlankComponent,
    children: [
      {
        path: 'hod-all-loads',
        component: HodAllLoadsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Teaching_loadRoutingModule {
}
