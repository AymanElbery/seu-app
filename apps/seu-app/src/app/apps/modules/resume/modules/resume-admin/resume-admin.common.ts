import { Routes } from '@angular/router';
import { ResumeAdminAdminsComponent } from './components/resume-admin-admins/resume-admin-admins.component';
import { ResumeAdminNewrequestsComponent } from './components/resume-admin-newrequests/resume-admin-newrequests.component';
import { ResumeAdminAddUsersComponent } from './components/resume-admin-add-users/resume-admin-add-users.component';
import { ResumeAdminRequestDetailsComponent } from './components/resume-admin-request-details/resume-admin-request-details.component';
import { ResumeAdminChangeStatusComponent } from './components/resume-admin-change-status/resume-admin-change-status.component';

import { ResumeAdminGuard } from '../../resume-guard/admin.guard';

export const componentDeclarations: any[] = [

    ResumeAdminAdminsComponent,
    ResumeAdminNewrequestsComponent,
    ResumeAdminAddUsersComponent,
    ResumeAdminRequestDetailsComponent,
    ResumeAdminChangeStatusComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: ResumeAdminAdminsComponent, canActivate: [ResumeAdminGuard]
    },
    {
        path: 'admins', component: ResumeAdminAdminsComponent, canActivate: [ResumeAdminGuard]
    },
    {
        path: 'new-requests', component: ResumeAdminNewrequestsComponent, canActivate: [ResumeAdminGuard]
    },
    {
        path: 'request-details/:id', component: ResumeAdminRequestDetailsComponent, canActivate: [ResumeAdminGuard]
    }
];
