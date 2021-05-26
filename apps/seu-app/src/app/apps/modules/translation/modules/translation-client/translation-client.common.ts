import { Routes } from '@angular/router';
import { TranslationClientMyrequestsComponent } from './components/translation-client-myrequests/translation-client-myrequests.component';
import { TranslationClientNewrequestsComponent } from './components/translation-client-newrequests/translation-client-newrequests.component';
import { TranslationCLIENTGuard } from '../../translation-guard/client.guard';
import { TranslationPayFeeCheckComponent } from './components/translation-pay-fee-check/translation-pay-fee-callback.component';
import { TranslationPayFeeComponent } from './components/translation-pay-fee/translation-pay-fee.component';

export const componentDeclarations: any[] = [
    TranslationClientMyrequestsComponent,
    TranslationClientNewrequestsComponent,
    TranslationPayFeeCheckComponent,
    TranslationPayFeeComponent
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
    {
        path: 'pay-callback/:tid', component: TranslationPayFeeCheckComponent
    }
];
