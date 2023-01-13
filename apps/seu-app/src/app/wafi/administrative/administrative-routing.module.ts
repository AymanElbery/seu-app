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
  { path: 'emp-evaluations', component: EmpEvaluationsComponent , data: { title: 'الخدمات الإلكترونية | التقييم الوظيفي' } },
  { path: 'penalty-discount', component: PenaltyDiscountComponent, data: { title: 'الخدمات الإلكترونية | حسم من الإجازة العادية' } },
  { path: 'emp-custody', component: EmpCustodyComponent, data: { title: 'الخدمات الإلكترونية | عهد الموظف' } },
  { path: 'emp-letters', component: EmpLettersComponent, data: { title: 'الخدمات الإلكترونية | خطابات الشكر و الإنذارات' }  },
  { path: 'training', component: TrainingComponent , data: { title: 'الخدمات الإلكترونية | الدورات التدريبية' } },
  { path: 'vouchers', component: VouchersComponent, data: { title: 'الخدمات الإلكترونية | البدلات و المكافآت' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
