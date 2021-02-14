import { Routes } from '@angular/router';
import { StatementsListComponent } from './components/statements-list/statements-list.component';
import { StatementsService } from './services/statements.service';

export const providerDeclarations: any[] = [
    StatementsService
];

export const routes: Routes = [
    {
        path: '', component: StatementsListComponent,
    }
];