import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsLandingComponent } from './components/skills-landing/skills-landing.component';
import { SkillsSTDGuard } from './skills-guard/std.guard';
import { SkillsSTAFFGuard } from './skills-guard/staff.guard';
import { SkillsEMPGuard } from './skills-guard/emp.guard';
import { SkillsHomeComponent } from './components/skills-home/skills-home.component';

const routes: Routes = [
  {
    path: '', component: SkillsLandingComponent,
    children: [
      {
        path: '',
        component: SkillsHomeComponent
      },
      {
        path: 'staff',
        loadChildren: './modules/skills-staff/skills-staff.module#SkillsStaffModule',
        canActivate: [SkillsSTAFFGuard]
      },
      {
        path: 'emp',
        loadChildren: './modules/skills-emp/skills-emp.module#SkillsEmpModule',
        canActivate: [SkillsEMPGuard]
      },
      {
        path: 'std',
        loadChildren: './modules/skills-std/skills-std.module#SkillsStdModule',
        canActivate: [SkillsSTDGuard]
      }
    ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
