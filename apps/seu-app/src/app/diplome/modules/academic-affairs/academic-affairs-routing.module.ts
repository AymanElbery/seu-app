import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path: "",
    //     component: TicketListComponent
    // },
    // {
    //     path: "tickets",
    //     component: TicketListComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicAffairsRoutingModule { }
