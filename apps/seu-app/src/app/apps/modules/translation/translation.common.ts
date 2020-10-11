import { Routes } from '@angular/router';
import { TranslationUSERGuard } from './translation-guard/user.guard';
import { TranslationADMINGuard } from './translation-guard/admin.guard';
import { TranslationCLIENTGuard } from './translation-guard/client.guard';
import { TranslationLandingComponent } from './components/translation-landing/translation-landing.component';
import { TranslationHomeComponent } from './components/translation-home/translation-home.component';
import { TranslationEMPGuard } from './translation-guard/emp.guard';
import { TranslationUserComponent } from './components/translation-user/translation-user.component';


export const providerDeclarations: any[] = [
    
];


export const routes: Routes = [
    {
        path: '', component: TranslationLandingComponent,
        canActivate: [TranslationUSERGuard],
        children: [
            {
                path: '',
                component: TranslationHomeComponent
            },
            {
                path: 'user',
                component: TranslationUserComponent
            },
            {
                path: 'admin',
                loadChildren: './modules/translation-admin/translation-admin.module#TranslationAdminModule',
                canActivate: [TranslationEMPGuard]
            },
            {
                path: 'client',
                loadChildren: './modules/translation-client/translation-client.module#TranslationClientModule',
                canActivate: [TranslationCLIENTGuard]
            },
        ]
    }
];