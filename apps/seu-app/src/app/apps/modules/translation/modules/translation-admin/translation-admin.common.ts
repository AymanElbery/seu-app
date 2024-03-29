import { Routes } from '@angular/router';
import { TranslationAdminUsersComponent } from './components/translation-admin-users/translation-admin-users.component';
import { TranslationAdminAddUsersComponent } from './components/translation-admin-add-users/translation-admin-add-users.component';
import { TranslationChangeReqStatusComponent } from './components/translation-change-req-status/translation-change-req-status.component';
import { TranslationChangeStatusComponent } from './components/translation-change-status/translation-change-status.component';
import { TranslationAddTranslatedFileComponent } from './components/translation-add-translated-file/translation-add-translated-file.component';
import { TranslationPenddingRequestsComponent } from './components/translation-client-pendding-requests/translation-pendding-requests.component';
import { TranslationPaymentRequestsComponent } from './components/translation-client-payment-requests/translation-payment-requests.component';
import { TranslationProcessiongRequestsComponent } from './components/translation-client-processing-requests/translation-client-processing-requests.component';
import { TranslationReviewingRequestsComponent } from './components/translation-client-reviewing-requests/translation-client-reviewing-requests.component';
import { TranslationADMINGuard } from '../../translation-guard/admin.guard';
import { TranslationMyrequestsComponent } from './components/translation-myrequests/translation-myrequests.component';
import { TranslationEMPGuard } from '../../translation-guard/emp.guard';
import { TranslationCompletedRequestsComponent } from './components/translation-completed-requests/translation-completed-requests.component';
import { TranslationCompleteFormComponent } from './components/translation-complete-form/translation-complete-form.component';
import { TranslationReviewFormComponent } from './components/translation-review-form/translation-review-form.component';
import { TranslationNoteComponent } from './components/translation-note/translation-note.component';
import { TranslationAssignReviewFormComponent } from './components/translation-assign-review-form/translation-assign-review-form.component';


export const componentDeclarations: any[] = [
    TranslationAdminUsersComponent,
    TranslationAdminAddUsersComponent,
    TranslationPenddingRequestsComponent,
    TranslationPaymentRequestsComponent,
    TranslationProcessiongRequestsComponent,
    TranslationMyrequestsComponent,
    TranslationCompletedRequestsComponent,
    TranslationCompleteFormComponent,
    TranslationChangeReqStatusComponent,
    TranslationChangeStatusComponent,
    TranslationAddTranslatedFileComponent,
    TranslationReviewingRequestsComponent,
    TranslationReviewFormComponent,
    TranslationNoteComponent,
    TranslationAssignReviewFormComponent
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
        path: 'payment-requests', component: TranslationPaymentRequestsComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'paid-requests', component: TranslationPaymentRequestsComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'unpaid-requests', component: TranslationPaymentRequestsComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'processing-requests', component: TranslationProcessiongRequestsComponent, canActivate: [TranslationADMINGuard]
    },
    {
        path: 'reviewing-requests', component: TranslationReviewingRequestsComponent, canActivate: [TranslationEMPGuard]
    },
    {
        path: 'completed-requests', component: TranslationCompletedRequestsComponent, canActivate: [TranslationEMPGuard]
    }, 
    {
        path: 'myrequests', component: TranslationMyrequestsComponent, canActivate: [TranslationEMPGuard]
    },
];
