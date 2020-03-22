import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
@NgModule({
  declarations: [TasksListComponent],
  imports: [
    TasksRoutingModule
  ]
})
export class TasksModule { }
