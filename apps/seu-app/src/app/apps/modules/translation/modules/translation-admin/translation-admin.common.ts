import { Routes } from '@angular/router';
import { TranslationAdminUsersComponent } from './components/translation-admin-users/translation-admin-users.component';
import { TranslationAdminAddUsersComponent } from './components/translation-admin-add-users/translation-admin-add-users.component';
import { TranslationAddCommentComponent } from './components/translation-add-comment/translation-add-comment.component';
import { TranslationChangeReqStatusComponent } from './components/translation-change-req-status/translation-change-req-status.component';
import { TranslationPenddingRequestsComponent } from './components/translation-client-pendding-requests/translation-pendding-requests.component';
import { TranslationADMINGuard } from '../../translation-guard/admin.guard';
import { TranslationMyrequestsComponent } from './components/translation-myrequests/translation-myrequests.component';
import { TranslationEMPGuard } from '../../translation-guard/emp.guard';
import { TranslationCompletedRequestsComponent } from './components/translation-completed-requests/translation-completed-requests.component';
import { TranslationCompleteFormComponent } from './components/translation-complete-form/translation-complete-form.component';
import { TranslationViewRequestComponent } from './components/translation-view-request/translation-view-request.component';

export const componentDeclarations: any[] = [
    TranslationAdminUsersComponent,
    TranslationAdminAddUsersComponent,
    //TranslationAddCommentComponent,
    TranslationPenddingRequestsComponent,
    TranslationMyrequestsComponent,
    TranslationCompletedRequestsComponent,
    TranslationCompleteFormComponent,
    TranslationViewRequestComponent,
    TranslationChangeReqStatusComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: TranslationAdminUsersComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'users', component: TranslationAdminUsersComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'pendding-requests', component: TranslationPenddingRequestsComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'completed-requests', component: TranslationCompletedRequestsComponent, canActivate: [TranslationEMPGuard]
    }, 
    {
        path: 'myrequests', component: TranslationMyrequestsComponent, canActivate: [TranslationEMPGuard]
    },
];
