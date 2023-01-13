import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './components/requests-component/requests.component'

const routes: Routes = [
  {
    path: "requests",
    component: RequestsComponent,
    data: { title: 'الخدمات الإلكترونية | البطاقة الجامعية' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
