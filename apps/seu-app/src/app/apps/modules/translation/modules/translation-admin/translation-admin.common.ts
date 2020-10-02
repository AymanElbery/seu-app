import { Routes } from '@angular/router';
import { TranslationAdminUsersComponent } from './components/translation-admin-users/translation-admin-users.component';
import { TranslationAdminAddUsersComponent } from './components/translation-admin-add-users/translation-admin-add-users.component';
import { TranslationPenddingRequestsComponent } from './components/translation-client-pendding-requests/translation-pendding-requests.component';
import { TranslationADMINGuard } from '../../translation-guard/admin.guard';

export const componentDeclarations: any[] = [

    TranslationAdminUsersComponent,
    TranslationAdminAddUsersComponent,
    TranslationPenddingRequestsComponent,
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
