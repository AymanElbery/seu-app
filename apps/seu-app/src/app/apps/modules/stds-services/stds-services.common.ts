import { Routes } from '@angular/router';
import { ServicesLandigComponent } from './components/services-landig/services-landig.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { ServicesLoginComponent } from './components/services-login/services-login.component';
import { ServicesAutoLoginComponent } from './components/services-autologin/services-autologin.component';
import { ServicesVerifyComponent } from './components/services-verify/services-verify.component';
import { STDServicesUSERGuard } from './services-guard/user.guard';
import { ServicesMenuComponent } from './components/services-menu/services-menu.component';
import { STDServicesUSERVerifiedGuard } from './services-guard/user-verified.guard';
import { StdSmsVerifyComponent } from './components/std-sms-verify/std-sms-verify.component';


export const componentDeclarations: any[] = [
    ServicesAutoLoginComponent,ServicesLandigComponent, ServicesHomeComponent, ServicesLoginComponent,
    StdSmsVerifyComponent, ServicesVerifyComponent, ServicesMenuComponent
];
export const providerDeclarations: any[] = [];

export const routes: Routes = [
    {
        path: '', component: ServicesLandigComponent,
        children: [
            { path: 'login', component: ServicesAutoLoginComponent },
            { path: 'oldlogin', component: ServicesLoginComponent },
            { path: 'verify', component: ServicesVerifyComponent },
            {path:'sms-verification', component: StdSmsVerifyComponent},
            { path: '', component: ServicesHomeComponent, canActivate: [STDServicesUSERGuard] },
            { path: 'home', component: ServicesHomeComponent, canActivate: [STDServicesUSERGuard] },
            {
                path: 'appointments',
                loadChildren: './modules/appointments/appointments.module#AppointmentsModule',
            },
            {
                path: 'docs',
                loadChildren: './modules/documents/documents.module#DocumentsModule',
            },
            {
                path: 'reenroll',
                loadChildren: './modules/reenroll/reenroll.module#ReenrollModule',
            }
        ]
    }
];