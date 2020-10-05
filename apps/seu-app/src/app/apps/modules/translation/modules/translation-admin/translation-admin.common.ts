import { Routes } from '@angular/router';
import { TranslationAdminUsersComponent } from './components/translation-admin-users/translation-admin-users.component';
import { TranslationAdminAddUsersComponent } from './components/translation-admin-add-users/translation-admin-add-users.component';
import { TranslationAddCommentComponent } from './components/translation-add-comment/translation-add-comment.component';
import { TranslationChangeReqStatusComponent } from './components/translation-change-req-status/translation-change-req-status.component';
import { TranslationPenddingRequestsComponent } from './components/translation-client-pendding-requests/translation-pendding-requests.component';
import { TranslationADMINGuard } from '../../translation-guard/admin.guard';

export const componentDeclarations: any[] = [

    TranslationAdminUsersComponent,
    TranslationAdminAddUsersComponent,
    TranslationAddCommentComponent,
    TranslationPenddingRequestsComponent,
    TranslationChangeReqStatusComponent,
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
];
