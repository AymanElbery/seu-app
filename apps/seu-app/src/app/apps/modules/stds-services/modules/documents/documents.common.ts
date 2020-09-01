import { Routes } from '@angular/router';
import { StdsPrintDocsComponent } from './components/stds-print-docs/stds-print-docs.component'
import { STDServicesUSERGuard } from '../../services-guard/user.guard';

export const componentDeclarations: any[] = [
    StdsPrintDocsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: StdsPrintDocsComponent,
        canActivate: [STDServicesUSERGuard]
    }
];
