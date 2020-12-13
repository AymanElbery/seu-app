import { Routes } from '@angular/router';
import { TranslationAuthComponent } from './components/translation-auth/translation-auth.component';
import { TranslationForgotComponent } from './components/translation-forgot/translation-forgot.component';
import { TranslationLoginComponent } from './components/translation-login/translation-login.component';
import { TranslationRegisterComponent } from './components/translation-register/translation-register.component';
import { TranslationResetComponent } from './components/translation-reset/translation-reset.component';

export const componentDeclarations: any[] = [
    TranslationLoginComponent, TranslationRegisterComponent,
    TranslationResetComponent, TranslationForgotComponent, TranslationAuthComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '', component: TranslationAuthComponent,
        children: [
            {
                path: '', component: TranslationLoginComponent
            },
            {
                path: 'login', component: TranslationLoginComponent
            },
            {
                path: 'register', component: TranslationRegisterComponent
            },
            {
                path: 'forgot', component: TranslationForgotComponent
            },
            {
                path: 'reset', component: TranslationResetComponent
            }
        ]
    }
];