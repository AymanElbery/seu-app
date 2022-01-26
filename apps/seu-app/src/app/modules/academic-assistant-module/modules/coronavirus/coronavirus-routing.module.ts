import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component'

const routes: Routes = [
    {
        path: "",
        component: TicketListComponent
    },
    {
        path: "tickets",
        component: TicketListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoronavirusRoutingModule { }
