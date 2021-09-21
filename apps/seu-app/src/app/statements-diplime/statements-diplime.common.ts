import { Routes } from '@angular/router';
import { StatementsListComponent } from './components/statements-list/statements-list.component';
import { StatementsDiplomeService } from './services/statements-diplome.service';

export const providerDeclarations: any[] = [
    StatementsDiplomeService
];

export const routes: Routes = [
    {
        path: 'all', component: StatementsListComponent,
    },
    {
        path: '', component: StatementsListComponent,
    }
];