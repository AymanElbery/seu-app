import { Routes } from '@angular/router';
import { ResumeInstructorMyrequestsComponent } from './components/resume-instructor-myrequests/resume-instructor-myrequests.component';
import { ResumeInstructorNewArComponent } from './components/resume-instructor-new-ar/resume-instructor-new-ar.component';
import { ResumeInstructorNewEnComponent } from './components/resume-instructor-new-en/resume-instructor-new-en.component';
import { ResumeInstructorReasonsComponent} from './components/resume-instructor-reasons/resume-instructor-reasons.component';

import { ResumeInstructorGuard } from '../../resume-guard/instructor.guard';

export const componentDeclarations: any[] = [

    ResumeInstructorMyrequestsComponent,
    ResumeInstructorNewArComponent,
    ResumeInstructorNewEnComponent,
    ResumeInstructorReasonsComponent,
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: ResumeInstructorMyrequestsComponent, canActivate: [ResumeInstructorGuard]
    },
    {
        path: 'my-requests', component: ResumeInstructorMyrequestsComponent, canActivate: [ResumeInstructorGuard]
    },
    {
        path: 'new-request', component: ResumeInstructorNewArComponent, canActivate: [ResumeInstructorGuard]
    },
    {
        path: 'new-request-en', component: ResumeInstructorNewEnComponent, canActivate: [ResumeInstructorGuard]
    },
];
