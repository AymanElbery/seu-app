import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Clean_dataBlankComponent } from './components/clean_data-blank/clean_data-blank.component';
import { StdDataComponent } from './components/std-data/std-data.component';

const routes: Routes = [
  {
    path: '',
    component: Clean_dataBlankComponent,
    children: [
      {
        path: 'std',
        component: StdDataComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clean_dataStdRoutingModule {
}
