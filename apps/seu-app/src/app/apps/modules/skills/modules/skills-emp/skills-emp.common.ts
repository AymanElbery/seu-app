import { Routes } from '@angular/router';
import { SkillsUsersHomeComponent } from './components/skills-users-home/skills-users-home.component';
import { SkillsUsersListComponent } from './components/skills-users-list/skills-users-list.component';
import { SkillsUsersFromComponent } from './components/skills-users-from/skills-users-from.component';
import { SkillsCoursesListComponent } from './components/skills-courses-list/skills-courses-list.component';
import { SkillsCoursesDetailsComponent } from './components/skills-courses-details/skills-courses-details.component';
import { SkillsCoursesStdComponent } from './components/skills-courses-std/skills-courses-std.component';
import { ChangeRequestComponent } from './components/skills-courses-std/diag/change-request/change-request.component';
import { SkillsCoursesFromComponent } from './components/skills-courses-from/skills-courses-from.component';
import { SkillsCoursesAppointmentsComponent } from './components/skills-courses-appointments/skills-courses-appointments.component';
import { SkillsADMINGuard } from '../../skills-guard/admin.guard';
import { SkillsEMPGuard } from '../../skills-guard/emp.guard';
import { SkillsCourseViewComponent } from './components/skills-course-view/skills-course-view.component';
import { SkillsCourseExcusesComponent } from './components/skills-course-excuses/skills-course-excuses.component';
import { SkillsCoursesFilesComponent } from './components/skills-course-files/skills-courses-files.component';
import { SkillsCoursesAttendComponent } from './components/skills-course-attend/skills-courses-attend.component';
import { SkillsCoursesRatingComponent } from './components/skills-course-rating/skills-courses-rating.component';
import { SkillsSettingsComponent } from './components/skills-settings/skills-settings.component';
import { SkillsRecordComponent } from './components/skills-record/skills-record.component';
import { StudentSkillsRecordComponent } from './components/student-skills-record/student-skills-record.component';
import { UpdateSettingComponent } from './components/skills-settings/diag/update-setting/update-setting.component';

export const componentDeclarations: any[] = [
    SkillsUsersHomeComponent,
    SkillsUsersListComponent,
    SkillsUsersFromComponent,
    SkillsCoursesListComponent,
    SkillsCoursesFromComponent,
    SkillsCoursesAppointmentsComponent,
    SkillsCoursesDetailsComponent,
    SkillsCoursesStdComponent,
    SkillsCourseViewComponent,
    ChangeRequestComponent,
    SkillsCoursesFilesComponent,
    SkillsCoursesAttendComponent,
    SkillsCourseExcusesComponent,
    SkillsCoursesFilesComponent,
    SkillsCoursesRatingComponent,
    SkillsSettingsComponent,
    SkillsRecordComponent,
    StudentSkillsRecordComponent,
    UpdateSettingComponent
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
        path: 'instructors-list', component: SkillsUsersListComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'instructors-add', component: SkillsUsersFromComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'courses-list', component: SkillsCoursesListComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'settings', component: SkillsSettingsComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'skills', component: SkillsRecordComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'student-skill-record/:std_id', component: StudentSkillsRecordComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'courses-inactive', component: SkillsCoursesListComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'courses-add', component: SkillsCoursesFromComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'courses-update/:id', component: SkillsCoursesFromComponent, canActivate: [SkillsEMPGuard]
    },
    {
        path: 'courses-view', component: SkillsCourseViewComponent,
        canActivate: [SkillsEMPGuard],
        children: [
            {
                path: 'details/:id', component: SkillsCoursesDetailsComponent, canActivate: [SkillsEMPGuard]
            },
            {
                path: 'students/:id', component: SkillsCoursesStdComponent, canActivate: [SkillsEMPGuard]
            },
            {
                path: 'lects/:id', component: SkillsCoursesAppointmentsComponent, canActivate: [SkillsEMPGuard]
            },{
                path: 'excuses/:id', component: SkillsCourseExcusesComponent, canActivate: [SkillsEMPGuard]
            },
            {
                path: 'files/:id', component: SkillsCoursesFilesComponent, canActivate: [SkillsEMPGuard]
            },
            {
                path: 'attendance/:id', component: SkillsCoursesAttendComponent, canActivate: [SkillsEMPGuard]
            },
            {
                path: 'rating/:id', component: SkillsCoursesRatingComponent, canActivate: [SkillsEMPGuard]
            },
        ]
    },

];
