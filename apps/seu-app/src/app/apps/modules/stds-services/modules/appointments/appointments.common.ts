import { Routes } from '@angular/router';
import { StdsAppointmentsComponent } from './components/stds-appointments/stds-appointments.component';
import { STDServicesUSERGuard } from '../../services-guard/user.guard';
import { StdsNewappointmentsComponent } from './components/stds-newappointments/stds-newappointments.component';

export const componentDeclarations: any[] = [
    StdsAppointmentsComponent, StdsNewappointmentsComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: StdsAppointmentsComponent,
        canActivate: [STDServicesUSERGuard]
    },
    {
        path: 'home',
        component: StdsAppointmentsComponent,
        canActivate: [STDServicesUSERGuard]
    },
    {
        path: 'history',
        component: StdsAppointmentsComponent,
        canActivate: [STDServicesUSERGuard]
    },
    {
        path: 'new',
        component: StdsNewappointmentsComponent,
        canActivate: [STDServicesUSERGuard]
    }
];
