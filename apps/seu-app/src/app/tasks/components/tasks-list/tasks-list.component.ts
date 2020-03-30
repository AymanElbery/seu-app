import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksManagementService } from '../../services/tasks-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  p: number;
  filter;
  searchTerm: string;
  config: any;
  subscriptionappreq: Subscription;
  gettasklist: any = [];
  constructor(private http: HttpClient, private taskservice: TasksManagementService, private toastr: AppToasterService, private translate: TranslateService, private dialog: MatDialog, private router: Router) {
  }
  isLoading = true;
  subscriptions;
  ddl;
  ddlemplist;

  ngOnInit() {
  this.taskservice.reloadList();
    this.getTasksList();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getTasksList();
    });

    this.ddl = this.taskservice.ddlsubject.subscribe(() => {
      this.gettasklist = this.taskservice.prepareList(this.gettasklist);
    });
    this.ddlemplist = this.taskservice.empListsubject.subscribe(() => {
      this.gettasklist = this.taskservice.prepareList(this.gettasklist);
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.subscriptionappreq.unsubscribe();
    this.ddl.unsubscribe();
    this.ddlemplist.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  tasksTitle;
  addnewTask = false;
  getTasksList() {
    //this.isLoading = true
    const func = this.router.url.split("/")[2];
    let url;
    this.tasksTitle = 'tasks.TaskList';
    switch (func) {
      case 'mytasks':
        url = 'getMyTasks';
        this.tasksTitle = 'tasks.assignedtasks';

        break;
      case 'alltasks':
        url = 'getViewableTasks';
        this.tasksTitle = 'tasks.alltasks';

        break;
      case 'createdTasks':
        url = 'getMyCreatedTasks';
        this.tasksTitle = 'tasks.createdTasks';
        this.addnewTask = true;
        break;
    }


    this.subscriptionappreq = this.taskservice.getTasksList(url).subscribe(appreqs => {
      if (appreqs) {
        this.gettasklist = this.taskservice.prepareList((appreqs as any).data);
        this.isLoading = false;
      }
    });

  }

  addtask() {
    this.router.navigate(['/tasks/add-task'])

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.disableClose = false;
    // dialogConfig.width = "70%";
    // dialogConfig.height="70%";
    // dialogConfig.data = {  };
    // this.dialog.open(AddTaskComponent, dialogConfig).afterClosed().subscribe(res => {
    // });
  }

}

