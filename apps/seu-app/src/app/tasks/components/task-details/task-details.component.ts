import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TasksManagementService } from '../../services/tasks-management.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

  taskID;
  task;
  loading = false;
  ddl;
  ddlemplist;

  constructor(private route: ActivatedRoute,
    private toastr: AppToasterService, private taskservice: TasksManagementService, private translate: TranslateService, private dialog: MatDialog) { }

  ngOnInit() {
    this.taskID = this.route.snapshot.paramMap.get("tid");
    this.getTaskDetails();
    this.ddl = this.taskservice.ddlsubject.subscribe(() => {
      this.updateTaskViewers();
    });
    this.ddlemplist = this.taskservice.empListsubject.subscribe(() => {
      this.updateTaskViewers();
    });
  }
  ngOnDestroy() {
    this.ddl.unsubscribe();
    this.ddlemplist.unsubscribe();
  }
  updateTaskViewers() {
    if (this.task) {
      this.task.assignedToName = this.taskservice.getEmpByID(this.task['assignedTo']);
      this.task.taskViewers = this.task.taskViewers.map(view => {
        view['viewerEmpName'] = this.taskservice.getEmpByID(view['viewerEmpId']);
        return view;
      });
    }
  }

  openDialog(type = '', code = '',title='') {
    let taskID = this.taskID;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    dialogConfig.data = { taskID, type, code,title };
    this.dialog.open(AddCommentComponent, dialogConfig).afterClosed().subscribe(res => {
      if (this.taskservice.dialogCloseRefresh) {
        this.taskservice.dialogCloseRefresh = false;
        this.getTaskDetails();
      }
    });
  }
  addcomment() {
    let taskID = this.taskID;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    dialogConfig.data = { taskID };
    this.dialog.open(AddCommentComponent, dialogConfig).afterClosed().subscribe(res => {
      if (this.taskservice.dialogCloseRefresh) {
        this.taskservice.dialogCloseRefresh = false;
        this.getTaskDetails();
      }
    });
  }

  getTaskDetails() {
    this.loading = true;
    this.taskservice.getTaskDetails(this.taskID).subscribe((response) => {
      if (response['statusCode'] == 200) {
        this.task = this.taskservice.setTaskDescs(response['data']);
        this.updateTaskViewers();
      }
      console.log(this.task);
      this.loading = false;
    }, err => {
      this.toastr.tryagain();
      this.loading = false;
    })
  }

}
