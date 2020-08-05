import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaycallbackComponent } from './components/paycallback/paycallback.component';

const routes: Routes = [
  {
    path: 'check',
    component: PaycallbackComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
