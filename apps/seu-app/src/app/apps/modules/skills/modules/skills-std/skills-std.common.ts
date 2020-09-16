import { Routes } from '@angular/router';
import { SkillsStdHomeComponent } from './components/skills-std-home/skills-std-home.component';
import { SkillsStdCoursesListComponent } from './components/skills-std-courses-list/skills-std-courses-list.component';
import { SkillsStdCourseDetailsComponent } from './components/skills-std-course-details/skills-std-course-details.component';
import { SkillsStdMycoursesComponent } from './components/skills-std-mycourses/skills-std-mycourses.component';
import { SkillsStdSkillsCoursesComponent } from './components/skills-std-skills-courses/skills-std-skills-courses.component';
import { SkillsStdConditionsComponent } from './components/skills-std-conditions/skills-std-conditions.component';
import { SkillsStdStandardsComponent } from './components/skills-std-standards/skills-std-standards.component';
import { SkillsSTDGuard } from '../../skills-guard/std.guard';
import { SkillsStdCourseViewComponent } from './components/skills-std-course-view/skills-std-course-view/skills-std-course-view.component';
import { SkillsStdCourseFilesComponent } from './components/skills-std-course-view/skills-std-course-files/skills-std-course-files.component';
import { SkillsStdCourseAttendsComponent } from './components/skills-std-course-view/skills-std-course-attends/skills-std-course-attends.component';
import { SkillsStdCourseRatingComponent } from './components/skills-std-course-view/skills-std-course-rating/skills-std-course-rating.component';
import { SkillsStdMycourseDetailsComponent } from './components/skills-std-course-view/skills-std-mycourse-details/skills-std-mycourse-details.component';
import { SkillsStdExcuseComponent } from './components/skills-std-course-view/skills-std-course-attends/dialog/skills-std-excuse.component';

export const componentDeclarations: any[] = [
    SkillsStdHomeComponent, SkillsStdCoursesListComponent, SkillsStdCourseDetailsComponent, SkillsStdMycoursesComponent,
    SkillsStdCourseViewComponent, SkillsStdMycourseDetailsComponent, SkillsStdCourseFilesComponent, SkillsStdCourseAttendsComponent,
    SkillsStdExcuseComponent, SkillsStdCourseRatingComponent, SkillsStdConditionsComponent, SkillsStdStandardsComponent, SkillsStdSkillsCoursesComponent
];

export const stdEntryComponents: any[] = [
    SkillsStdExcuseComponent
];
export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: SkillsStdHomeComponent
    },
    {
        path: 'courses-list', component: SkillsStdCoursesListComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'course-details/:id', component: SkillsStdCourseDetailsComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'mycourses', component: SkillsStdMycoursesComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'conditions', component: SkillsStdConditionsComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'standards', component: SkillsStdStandardsComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'skills-courses', component: SkillsStdSkillsCoursesComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'course-view', component: SkillsStdCourseViewComponent,
        canActivate: [SkillsSTDGuard],
        children: [
            {
                path: 'details/:id', component: SkillsStdMycourseDetailsComponent, canActivate: [SkillsSTDGuard]
            },
            {
                path: 'files/:id', component: SkillsStdCourseFilesComponent, canActivate: [SkillsSTDGuard]
            },
            {
                path: 'attendance/:id', component: SkillsStdCourseAttendsComponent, canActivate: [SkillsSTDGuard]
            },
            {
                path: 'rating/:id', component: SkillsStdCourseRatingComponent, canActivate: [SkillsSTDGuard]
            },
        ]
    },
];
