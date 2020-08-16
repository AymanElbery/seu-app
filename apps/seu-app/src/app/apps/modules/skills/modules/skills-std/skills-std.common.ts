import { Routes } from '@angular/router';
import { SkillsStdHomeComponent } from './components/skills-std-home/skills-std-home.component';
import { SkillsStdCoursesListComponent } from './components/skills-std-courses-list/skills-std-courses-list.component';
import { SkillsStdCourseDetailsComponent } from './components/skills-std-course-details/skills-std-course-details.component';
import { SkillsStdMycoursesComponent } from './components/skills-std-mycourses/skills-std-mycourses.component';
import { SkillsSTDGuard } from '../../skills-guard/std.guard';

export const componentDeclarations: any[] = [
    SkillsStdHomeComponent, SkillsStdCoursesListComponent, SkillsStdCourseDetailsComponent, SkillsStdMycoursesComponent
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
        path: 'course-view/:id', component: SkillsStdCourseDetailsComponent, canActivate: [SkillsSTDGuard]
    },
    {
        path: 'mycourses', component: SkillsStdMycoursesComponent, canActivate: [SkillsSTDGuard]
    },
];
