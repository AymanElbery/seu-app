import { Routes } from '@angular/router';
import { StatementsListComponent } from './components/statements-list/statements-list.component';
import { StatementsService } from './services/statements.service';

export const providerDeclarations: any[] = [
    StatementsService
];

export const routes: Routes = [
    {
        path: 'all', component: StatementsListComponent,
        data: { title: 'الخدمات الإلكترونية | الإفادات الطلابية - ماجيستير' }
    },
    {
        path: '', component: StatementsListComponent,
        data: { title: 'الخدمات الإلكترونية | الإفادات الطلابية - ماجيستير' }
    }
];