import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqAssistantModule } from './modules/reg-assistant/reg-assistant.module'

const routes: Routes = [
  {
    path: 'reg-assistant',
    loadChildren: './modules/reg-assistant/reg-assistant.module#ReqAssistantModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReqAssistantModule],
  exports: [RouterModule]
})
export class AcademicAssistantRoutingModule { }
