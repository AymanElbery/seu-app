import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { WafiHomeComponent } from './components/home/wafi-home.component';

const routes: Routes = [
  {
    path: '',
    component: WafiHomeComponent,
    children: [
      {
        path: '',
        loadChildren:
          './personal/personal.module#PersonalModule',
      },
      {
        path: 'personal',
        loadChildren:
          './personal/personal.module#PersonalModule',
      },
      {
        path: 'employee-requests',
        loadChildren:
          './employee-requests/employee-requests.module#EmployeeRequestsModule',
      },
      {
        path: 'administrative',
        loadChildren:
          './administrative/administrative.module#AdministrativeModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WafiRoutingModule { }