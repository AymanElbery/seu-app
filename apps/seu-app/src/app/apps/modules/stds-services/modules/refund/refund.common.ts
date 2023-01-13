import { Routes } from '@angular/router';
import { RefundRequestsComponent } from './components/refund-requests/refund-requests.component'
import { STDServicesUSERGuard } from '../../services-guard/user.guard';
import { STDServicesUSERVerifiedGuard } from '../../services-guard/user-verified.guard';

export const componentDeclarations: any[] = [
    RefundRequestsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: RefundRequestsComponent,
        canActivate: [STDServicesUSERVerifiedGuard],
        data: {from_component: 'refund'}
    } 
];
