import { Routes } from '@angular/router';
import { ServicesLandigComponent } from './components/services-landig/services-landig.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { ServicesLoginComponent } from './components/services-login/services-login.component';
import { ServicesVerifyComponent } from './components/services-verify/services-verify.component';
import { STDServicesUSERGuard } from './services-guard/user.guard';
import { ServicesMenuComponent } from './components/services-menu/services-menu.component';


export const componentDeclarations: any[] = [
    ServicesLandigComponent, ServicesHomeComponent, ServicesLoginComponent, ServicesVerifyComponent, ServicesMenuComponent
];
export const providerDeclarations: any[] = [];

export const routes: Routes = [
    {
        path: '', component: ServicesLandigComponent,
        children: [
            { path: 'login', component: ServicesLoginComponent },
            { path: 'verify', component: ServicesVerifyComponent },
            { path: '', component: ServicesHomeComponent, canActivate: [STDServicesUSERGuard] },
            { path: 'home', component: ServicesHomeComponent, canActivate: [STDServicesUSERGuard] },
            {
                path: 'appointments',
                loadChildren: './modules/appointments/appointments.module#AppointmentsModule',
            },
            {
                path: 'docs',
                loadChildren: './modules/documents/documents.module#DocumentsModule',
            }
        ]
    }
];