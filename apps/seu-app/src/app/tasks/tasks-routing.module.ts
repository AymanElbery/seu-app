import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddCommentComponent } from './components//add-comment/add-comment.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { FavEmpComponent } from './components/fav-emp/fav-emp.component';
const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'createdTasks', component: TasksListComponent },
  { path: 'mytasks', component: TasksListComponent },
  { path: 'alltasks', component: TasksListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'fav-emps', component: FavEmpComponent },
  { path: 'add-comment/:tid', component: AddCommentComponent },
  { path: 'details/:tid', component: TaskDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
