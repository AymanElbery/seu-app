import { Routes } from '@angular/router';
import { StdsPrintDocsComponent } from './components/stds-print-docs/stds-print-docs.component'
import { STDServicesUSERGuard } from '../../services-guard/user.guard';
import { STDServicesUSERVerifiedGuard } from '../../services-guard/user-verified.guard';

export const componentDeclarations: any[] = [
    StdsPrintDocsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: StdsPrintDocsComponent,
        canActivate: [STDServicesUSERVerifiedGuard],
        data: {from_component: 'docs'}
    }
];
