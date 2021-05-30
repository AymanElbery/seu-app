import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqAssistantModule } from './modules/reg-assistant/reg-assistant.module'

const routes: Routes = [
  {
    path: 'reg-assistant',
    loadChildren: './modules/reg-assistant/reg-assistant.module#ReqAssistantModule',
  },
  {
    path: 'academic-requests',
    loadChildren: './modules/academic-requests/sd-academic-requests.module#SDAcademicRequeststModule',
  },
  {
    path: 'exams',
    loadChildren: './modules/exams/sd-exams.module#SDExamstModule',
  },
  {
    path: 'knowledge-resources',
    loadChildren: './modules/knowledge-resources/sd-knowledge-resources.module#SDKnowledgeResourcesModule',
  },
  {
    path: 'sadad',
    loadChildren: './modules/sadad/sd-sadad.module#SDSadadModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReqAssistantModule],
  exports: [RouterModule]
})
export class AcademicAssistantRoutingModule { }
