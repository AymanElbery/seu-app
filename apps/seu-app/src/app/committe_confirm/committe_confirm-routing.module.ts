import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Committe_confirmBlankComponent } from './components/committe_confirm-blank/committe_confirm-blank.component';
import { CommitteComponent } from './components/committe/committe.component';

const routes: Routes = [
  {
    path: '',
    component: Committe_confirmBlankComponent,
    children: [
      {
        path: 'committe',
        component: CommitteComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Committe_confirmRoutingModule {
}
