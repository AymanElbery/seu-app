import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { VouchersComponent } from './vouchers/vouchers.component.tns';
import { PenaltyDiscountComponent } from './penalty-discount/penalty-discount.component.tns';
import { EmpCustodyComponent } from './emp-custody/emp-custody.component.tns';
import { EmpEvaluationsComponent } from './emp-evaluations/emp-evaluations.component.tns';
import { EmpLettersComponent } from './emp-letters/emp-letters.component.tns';
import { TrainingComponent } from './training/training.component.tns';

const routes: Routes = [
  {path:"administrative",children:[
    
    {path:"vouchers",component:VouchersComponent},
    { path: 'penalty-discount', component: PenaltyDiscountComponent },
    { path: 'emp-custody', component: EmpCustodyComponent },
    { path: 'emp-evaluations', component: EmpEvaluationsComponent },
    { path: 'emp-letters', component: EmpLettersComponent },
    { path: 'training', component: TrainingComponent },

  ]}
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AdministrativeRoutingModule { }
