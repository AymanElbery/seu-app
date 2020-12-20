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
import { UserService } from 'src/app/account/services/user.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

  taskID;
  list;
  task;
  loading = false;
  ddl;
  ddlemplist;
  LoggedINID;
  constructor(private route: ActivatedRoute,private router:Router,
    private user: UserService,
    private toastr: AppToasterService, private taskservice: TasksManagementService, private translate: TranslateService, private dialog: MatDialog) {
    this.taskservice.reloadList();
  }

  ngOnInit() {
    this.taskservice.reloadList();
    this.LoggedINID = this.user.userData.id;
    this.taskID = this.route.snapshot.paramMap.get("tid");
    this.list = this.route.snapshot.paramMap.get("list");
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
  backToList(){
   this.router.navigate(['/tasks/'+this.list])

  }
  updateTaskViewers() {
    if (this.task) {
      this.task.assignedToName = this.taskservice.getEmpByID(this.task['assignedTo']);
      this.task.createdByName = this.taskservice.getEmpByID(this.task['createdBy']);

      if (this.task['hasAttachment'] && this.task.attachName) {
        this.task['downloadPath'] = environment.wafi_apilink.replace('/jersey', '') + '/DownloadFileServlet?empId=' + this.task.createdBy + '&type=task&name=' + this.task.attachName
      }
      this.task.taskViewers = this.task.taskViewers.map(view => {
        view['viewerEmpName'] = this.taskservice.getEmpByID(view['viewerEmpId']);
        return view;
      });
      this.task.taskComments = this.task.taskComments.map(comment => {
        comment['taskStatusDesc'] = this.taskservice.getStatusByID(comment['taskStatus']);
        comment['taskAssignedTo'] = this.taskservice.getStatusByID(comment['assignTo']);
        comment['createdByName'] = this.taskservice.getEmpByID(comment['createdBy']);

        if (comment['hasAttachment'] && comment.attachName) {
          comment['downloadPath'] = environment.wafi_apilink.replace('/jersey', '') + '/DownloadFileServlet?empId=' + comment.createdBy + '&type=comment&name=' + comment.attachName
        }
        return comment;
      });
    }
  }

  openDialog(type = '', code = '', title = '') {
    let taskID = this.taskID;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    dialogConfig.data = { taskID, type, code, title };
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
      this.loading = false;
    }, err => {
      this.toastr.tryagain();
      this.loading = false;
    })
  }

}
