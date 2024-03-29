import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqAssistantModule } from './modules/reg-assistant/reg-assistant.module'
import { StdAssistantModule } from './modules/std-assistant/std-assistant.module'

const routes: Routes = [
  {
    path: 'std-assistant',
    loadChildren: './modules/std-assistant/std-assistant.module#StdAssistantModule',
  },
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
  },
  {
    path: 'issues',
    loadChildren: './modules/issues/sd-issues.module#SDIssuesModule',
  },
  {
    path: 'inquiries',
    loadChildren: './modules/inquiries/sd-inquiries.module#SDInquiriesModule',
  },
  {
    path: 'coronavirus',
    loadChildren: './modules/coronavirus/sd-coronavirus.module#SDCoronavirusModule',
  },
  {
    path: 'login',
    loadChildren: './modules/login/sd-login.module#SDLoginModule',
  },
  {
    path: 'committe',
    loadChildren: './modules/committe/sd-committe.module#SDCommitteModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReqAssistantModule, StdAssistantModule],
  exports: [RouterModule]
})
export class AcademicAssistantRoutingModule { }
