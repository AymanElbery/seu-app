import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component'

const routes: Routes = [
    {
        path: "",
        component: TicketListComponent,
        data: { title: 'الخدمات الإلكترونية | الإختبارات الإلكترونية' }
    },
    {
        path: "tickets",
        component: TicketListComponent,
        data: { title: 'الخدمات الإلكترونية | الإختبارات الإلكترونية' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SDExamsRoutingModule { }
