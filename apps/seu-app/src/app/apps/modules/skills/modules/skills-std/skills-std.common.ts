import { Routes } from '@angular/router';
import { SkillsStdHomeComponent } from './components/skills-std-home/skills-std-home.component';
import { SkillsStdCoursesListComponent } from './components/skills-std-courses-list/skills-std-courses-list.component';
import { SkillsStdCourseDetailsComponent } from './components/skills-std-course-details/skills-std-course-details.component';
import { SkillsStdMycoursesComponent } from './components/skills-std-mycourses/skills-std-mycourses.component';
import { SkillsSTDGuard } from '../../skills-guard/std.guard';
import { SkillsStdCourseViewComponent } from './components/skills-std-course-view/skills-std-course-view/skills-std-course-view.component';
import { SkillsStdCourseFilesComponent } from './components/skills-std-course-view/skills-std-course-files/skills-std-course-files.component';
import { SkillsStdCourseAttendsComponent } from './components/skills-std-course-view/skills-std-course-attends/skills-std-course-attends.component';
import { SkillsStdMycourseDetailsComponent } from './components/skills-std-course-view/skills-std-mycourse-details/skills-std-mycourse-details.component';

export const componentDeclarations: any[] = [
    SkillsStdHomeComponent, SkillsStdCoursesListComponent, SkillsStdCourseDetailsComponent, SkillsStdMycoursesComponent,
    SkillsStdCourseViewComponent, SkillsStdMycourseDetailsComponent, SkillsStdCourseFilesComponent, SkillsStdCourseAttendsComponent
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
        ]
    },
];
