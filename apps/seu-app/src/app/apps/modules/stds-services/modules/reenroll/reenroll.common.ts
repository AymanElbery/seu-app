import { Routes } from '@angular/router';
import { ReenrollRequestsComponent } from './components/reenroll-requests/reenroll-requests.component'
import { STDServicesUSERGuard } from '../../services-guard/user.guard';
import { STDServicesUSERVerifiedGuard } from '../../services-guard/user-verified.guard';

export const componentDeclarations: any[] = [
    ReenrollRequestsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: ReenrollRequestsComponent,
        canActivate: [STDServicesUSERVerifiedGuard],
        data: {from_component: 'reenroll'}
    }
];
