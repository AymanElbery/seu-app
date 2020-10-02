import { Routes } from '@angular/router';
import { TranslationClientMyrequestsComponent } from './components/translation-client-myrequests/translation-client-myrequests.component';
import { TranslationClientNewrequestsComponent } from './components/translation-client-newrequests/translation-client-newrequests.component';
import { TranslationCLIENTGuard } from '../../translation-guard/client.guard';

export const componentDeclarations: any[] = [

    TranslationClientMyrequestsComponent,
    TranslationClientNewrequestsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: TranslationClientMyrequestsComponent, canActivate: [TranslationCLIENTGuard]
    },
    {
        path: 'my-requests', component: TranslationClientMyrequestsComponent, canActivate: [TranslationCLIENTGuard]
    },
    {
        path: 'new-request', component: TranslationClientNewrequestsComponent, canActivate: [TranslationCLIENTGuard]
    },
];
