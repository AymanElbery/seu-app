import { Routes } from '@angular/router';
import { BbHomeComponent } from './components/bb-home/bb-home.component';
import { BbLandingComponent } from './components/bb-landing/bb-landing.component';
import { BbMenuComponent } from './components/bb-menu/bb-menu.component';
import { BbReportComponent } from './components/bb-report/bb-report.component';
import { BBUSERGuard } from './guards/user.guard';


export const Declarations: any[] = [
    BbLandingComponent, BbHomeComponent, BbMenuComponent, BbReportComponent
];

export const routes: Routes = [
    {
        path: '',
        component: BbLandingComponent,
        canActivate: [BBUSERGuard],
        children: [
            {
                path: '',
                component: BbHomeComponent
            },
            {
                path: 'view/:code',
                component: BbReportComponent
            }
        ]
    }
];