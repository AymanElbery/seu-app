import { Routes } from '@angular/router';
import { ResumeUSERGuard } from './resume-guard/user.guard';
import { ResumeInstructorGuard } from './resume-guard/instructor.guard';
import { ResumeAdminGuard } from './resume-guard/admin.guard';
import { ResumeManagerGuard } from './resume-guard/manager.guard';
import { ResumeLandingComponent } from './components/resume-landing/resume-landing.component';
import { ResumeHomeComponent } from './components/resume-home/resume-home.component';
import { ResumeUserComponent } from './components/resume-user/resume-user.component';


export const providerDeclarations: any[] = [
    
];


export const routes: Routes = [
    {
        path: '', component: ResumeLandingComponent,
        canActivate: [ResumeUSERGuard],
        children: [
            {
                path: '',
                component: ResumeHomeComponent
            },
            {
                path: 'user',
                component: ResumeUserComponent
            },
            {
                path: 'instructor',
                loadChildren: './modules/resume-instructor/resume-instructor.module#ResumeInstructorModule',
                canActivate: [ResumeInstructorGuard]
            },
            {
                path: 'manager',
                loadChildren: './modules/resume-manager/resume-manager.module#ResumeManagerModule',
                canActivate: [ResumeManagerGuard]
            },
            {
                path: 'admin',
                loadChildren: './modules/resume-admin/resume-admin.module#ResumeAdminModule',
                canActivate: [ResumeAdminGuard]
            }
        ]
    }
];