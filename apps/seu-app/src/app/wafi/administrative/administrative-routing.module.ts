import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmpEvaluationsComponent} from './emp-evaluations/emp-evaluations.component';
import {EmpCustodyComponent} from './emp-custody/emp-custody.component';
import {EmpLettersComponent} from './emp-letters/emp-letters.component';
import {TrainingComponent} from './training/training.component';
import {VouchersComponent} from './vouchers/vouchers.component';
import { PenaltyDiscountComponent } from './penalty-discount/penalty-discount.component';

const routes: Routes = [

  { path: '', component: EmpEvaluationsComponent },
  { path: 'emp-evaluations', component: EmpEvaluationsComponent },
  { path: 'penalty-discount', component: PenaltyDiscountComponent },
  { path: 'emp-custody', component: EmpCustodyComponent },
  { path: 'emp-letters', component: EmpLettersComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'vouchers', component: VouchersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
