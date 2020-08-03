import { Routes } from '@angular/router';
import { SkillsUsersHomeComponent } from './components/skills-users-home/skills-users-home.component';
import { SkillsUsersListComponent } from './components/skills-users-list/skills-users-list.component';
import { SkillsUsersFromComponent } from './components/skills-users-from/skills-users-from.component';
import { SkillsADMINGuard } from '../../skills-guard/admin.guard';

export const componentDeclarations: any[] = [
    SkillsUsersHomeComponent, SkillsUsersListComponent, SkillsUsersFromComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: SkillsUsersHomeComponent
    },
    {
        path: 'users-list', component: SkillsUsersListComponent, canActivate: [SkillsADMINGuard]
    },
    {
        path: 'users-add', component: SkillsUsersFromComponent, canActivate: [SkillsADMINGuard]
    }
];
