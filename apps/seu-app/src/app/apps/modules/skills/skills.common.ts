import { Routes } from '@angular/router';

import { SkillsLandingComponent } from './components/skills-landing/skills-landing.component';
import { SkillsHomeComponent } from './components/skills-home/skills-home.component';

import { SkillsSTDGuard } from './skills-guard/std.guard';
import { SkillsSTAFFGuard } from './skills-guard/staff.guard';
import { SkillsEMPGuard } from './skills-guard/emp.guard';
import { SkillsMenuComponent } from './components/menu/skills-menu/skills-menu.component';
import { SkillsEmpMenuComponent } from './components/menu/skills-emp-menu/skills-emp-menu.component';
import { SkillsStaffMenuComponent } from './components/menu/skills-staff-menu/skills-staff-menu.component';
import { SkillsStdMenuComponent } from './components/menu/skills-std-menu/skills-std-menu.component';
import { SkillsUSERGuard } from './skills-guard/user.guard';
import { SkillsADMINGuard } from './skills-guard/admin.guard';


export const componentDeclarations: any[] = [
    SkillsLandingComponent, SkillsHomeComponent, SkillsMenuComponent,
    SkillsEmpMenuComponent, SkillsStaffMenuComponent, SkillsStdMenuComponent
];

export const providerDeclarations: any[] = [
    SkillsUSERGuard,SkillsADMINGuard,SkillsSTDGuard, SkillsSTAFFGuard, SkillsEMPGuard, SkillsHomeComponent
];


export const routes: Routes = [
    {
        path: '', component: SkillsLandingComponent,
        canActivate: [SkillsUSERGuard],
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
    }
];