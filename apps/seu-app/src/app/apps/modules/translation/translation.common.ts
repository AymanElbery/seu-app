import { Routes } from '@angular/router';
import { TranslationUSERGuard } from './translation-guard/user.guard';
import { TranslationLandingComponent } from './components/translation-landing/translation-landing.component';
import { TranslationHomeComponent } from './components/translation-home/translation-home.component';


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
        ]
    }
];