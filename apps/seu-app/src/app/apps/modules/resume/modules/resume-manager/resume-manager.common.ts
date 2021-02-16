import { Routes } from '@angular/router';
import { ResumeManagerMyrequestsComponent } from './components/resume-manager-myrequests/resume-manager-myrequests.component';
import { ResumeManagerNewArComponent } from './components/resume-manager-new-ar/resume-manager-new-ar.component';
import { ResumeManagerNewEnComponent } from './components/resume-manager-new-en/resume-manager-new-en.component';
import { ResumeManagerNewRequestsComponent } from './components/resume-manager-newrequests/resume-manager-newrequests.component';
import { ResumeManagerChangeStatusComponent } from './components/resume-manager-change-status/resume-manager-change-status.component';
import { ResumeManagerRequestDetailsComponent } from './components/resume-manager-request-details/resume-manager-request-details.component';

import { ResumeManagerGuard } from '../../resume-guard/manager.guard';

export const componentDeclarations: any[] = [

    ResumeManagerMyrequestsComponent,
    ResumeManagerNewArComponent,
    ResumeManagerNewEnComponent,
    ResumeManagerNewRequestsComponent,
    ResumeManagerChangeStatusComponent,
    ResumeManagerRequestDetailsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: ResumeManagerMyrequestsComponent, canActivate: [ResumeManagerGuard]
    },
    {
        path: 'my-requests', component: ResumeManagerMyrequestsComponent, canActivate: [ResumeManagerGuard]
    },
    {
        path: 'new-request-ar', component: ResumeManagerNewArComponent, canActivate: [ResumeManagerGuard]
    },
    {
        path: 'new-request-en', component: ResumeManagerNewEnComponent, canActivate: [ResumeManagerGuard]
    },
    {
        path: 'new-requests', component: ResumeManagerNewRequestsComponent, canActivate: [ResumeManagerGuard]
    },
    {
        path: 'request-details/:id', component: ResumeManagerRequestDetailsComponent, canActivate: [ResumeManagerGuard]
    }
];
