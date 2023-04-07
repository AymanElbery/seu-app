import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityPolicyComponent } from './security-policy/security-policy.component';

const routes: Routes = [
  { path: 'security-policies', component: SecurityPolicyComponent, data: { title: 'الخدمات الإلكترونية | سياسات الأمن السيبراني' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
