import { Routes } from '@angular/router';
import { SkillsUsersHomeComponent } from './components/skills-users-home/skills-users-home.component';
import { SkillsUsersListComponent } from './components/skills-users-list/skills-users-list.component';
import { SkillsUsersFromComponent } from './components/skills-users-from/skills-users-from.component';
import { SkillsCoursesListComponent } from './components/skills-courses-list/skills-courses-list.component';
import { SkillsCoursesFromComponent } from './components/skills-courses-from/skills-courses-from.component';
import { SkillsCoursesAppointmentsComponent } from './components/skills-courses-appointments/skills-courses-appointments.component';
import { SkillsADMINGuard } from '../../skills-guard/admin.guard';

export const componentDeclarations: any[] = [
    SkillsUsersHomeComponent, 
    SkillsUsersListComponent, 
    SkillsUsersFromComponent,
    SkillsCoursesListComponent,
    SkillsCoursesFromComponent,
    SkillsCoursesAppointmentsComponent,
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
    },
    {
        path: 'courses-list', component: SkillsCoursesListComponent, canActivate: [SkillsADMINGuard]
    },
    {
        path: 'courses-add', component: SkillsCoursesFromComponent, canActivate: [SkillsADMINGuard]
    },
    {
        path: 'courses-update/:id', component: SkillsCoursesFromComponent, canActivate: [SkillsADMINGuard]
    },
    {
        path: 'courses-appointments/:id', component: SkillsCoursesAppointmentsComponent, canActivate: [SkillsADMINGuard]
    }
];
