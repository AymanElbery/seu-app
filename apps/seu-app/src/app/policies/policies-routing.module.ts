import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityPolicyComponent } from './security-policy/security-policy.component';
import { PublicationRewardsSystemComponent } from './publication-rewards-system/publication-rewards-system.component';

const routes: Routes = [
  { path: 'security-policies', component: SecurityPolicyComponent, data: { title: 'الخدمات الإلكترونية | سياسات الأمن السيبراني' } },
  { path: 'publication-rewards-system', component: PublicationRewardsSystemComponent , data: { title: 'الخدمات الإلكترونية | محفزات النشر العلمي ' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
