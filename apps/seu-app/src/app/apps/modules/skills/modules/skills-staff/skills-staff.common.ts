import { Routes } from '@angular/router';
import { SkillsStaffCourseAttendanceComponent } from './components/skills-staff-course-attendance/skills-staff-course-attendance.component';
import { SkillsStaffCourseDetailsComponent } from './components/skills-staff-course-details/skills-staff-course-details.component';
import { SkillsStaffCourseFilesComponent } from './components/skills-staff-course-files/skills-staff-course-files.component';
import { SkillsStaffCourseStudentsComponent } from './components/skills-staff-course-students/skills-staff-course-students.component';
import { SkillsStaffCourseViewComponent } from './components/skills-staff-course-view/skills-staff-course-view.component';
import { SkillsStaffMycoursesComponent } from './components/skills-staff-mycourses/skills-staff-mycourses.component';
import { AddFileComponent } from './components/skills-staff-course-files/diag/add-file/add-file.component';
import { SkillsSTAFFGuard } from '../../skills-guard/staff.guard';

export const componentDeclarations: any[] = [
    SkillsStaffCourseAttendanceComponent,
    SkillsStaffCourseDetailsComponent,
    SkillsStaffCourseFilesComponent,
    SkillsStaffCourseStudentsComponent,
    SkillsStaffCourseViewComponent,
    SkillsStaffMycoursesComponent,
    AddFileComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: SkillsStaffMycoursesComponent, canActivate: [SkillsSTAFFGuard]
    },
    {
        path: 'mycourses', component: SkillsStaffMycoursesComponent, canActivate: [SkillsSTAFFGuard]
    },
    {
        path: 'course-view', component: SkillsStaffCourseViewComponent,
        canActivate: [SkillsSTAFFGuard],
        children: [
            {
                path: 'details/:id', component: SkillsStaffCourseDetailsComponent, canActivate: [SkillsSTAFFGuard]
            },
            {
                path: 'students/:id', component: SkillsStaffCourseStudentsComponent, canActivate: [SkillsSTAFFGuard]
            },
            {
                path: 'files/:id', component: SkillsStaffCourseFilesComponent, canActivate: [SkillsSTAFFGuard]
            },
            {
                path: 'attendance/:id', component: SkillsStaffCourseAttendanceComponent, canActivate: [SkillsSTAFFGuard]
            },
        ]
    },
];
