import { Routes } from '@angular/router';
import { SkillsSTDGuard } from './skills-guard/std.guard';
import { SkillsSTAFFGuard } from './skills-guard/staff.guard';
import { SkillsEMPGuard } from './skills-guard/emp.guard';
import { SkillsUSERGuard } from './skills-guard/user.guard';
import { SkillsADMINGuard } from './skills-guard/admin.guard';
import { SkillsUserService } from './services/skill-user';
import { SkillsLandingComponent } from './components/skills-landing/skills-landing.component';
import { SkillsHomeComponent } from './components/skills-home/skills-home.component';


export const providerDeclarations: any[] = [
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