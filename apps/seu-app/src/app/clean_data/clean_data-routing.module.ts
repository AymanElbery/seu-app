import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Clean_dataBlankComponent } from './components/clean_data-blank/clean_data-blank.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';

const routes: Routes = [
  {
    path: '',
    component: Clean_dataBlankComponent,
    children: [
      {
        path: 'emp',
        component: EmpDataComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clean_dataRoutingModule {
}
