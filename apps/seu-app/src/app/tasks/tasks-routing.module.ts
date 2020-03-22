import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {AddCommentComponent} from './components//add-comment/add-comment.component';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'add-comment', component: AddCommentComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
