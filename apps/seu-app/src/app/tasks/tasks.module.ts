import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddCommentComponent } from './components//add-comment/add-comment.component';
import { SeucommonModule } from '../seucommon/seucommon.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppLazyTransModule } from 'src/app/app.lazytrans.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TasksManagementService } from './services/tasks-management.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
@NgModule({
  declarations: [TasksListComponent, AddTaskComponent, AddCommentComponent,TaskDetailsComponent],
  entryComponents: [AddTaskComponent],
  imports: [
    TasksRoutingModule,
    AppLazyTransModule, MatProgressSpinnerModule,
    MatDialogModule,
    AppLazyTransModule,
    FormsModule, ReactiveFormsModule, NgxPaginationModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    CommonModule,
    SeucommonModule,
    NgSelectModule
  ]
})
export class TasksModule {

  constructor(private taskservice: TasksManagementService) {
    this.taskservice.loadDDL();
    this.taskservice.loadEmpList();
  }


}
