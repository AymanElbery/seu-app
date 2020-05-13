import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list-component/list.component';
import { ReplyComponent } from './components/reply-component/reply.component';
import { UnReplyComponent } from './components/unreply-component/unreply.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  {
    path: "all",
    component: ListComponent
  },
  {
    path: "reply",
    component: ReplyComponent
  },
  {
    path: "unreply",
    component: UnReplyComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquriesRoutingModule { }
