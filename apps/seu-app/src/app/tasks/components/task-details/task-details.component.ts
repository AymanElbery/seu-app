import { Component, OnInit } from '@angular/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TasksManagementService } from '../../services/tasks-management.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AddTaskComponent} from '../add-task/add-task.component';
import {AddCommentComponent} from '../add-comment/add-comment.component';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  taskID;
  task;
  loading = false;
  
  constructor(private route: ActivatedRoute,
    private toastr: AppToasterService, private taskservice: TasksManagementService, private translate: TranslateService,private dialog: MatDialog) { }

  ngOnInit() {
    this.taskID = this.route.snapshot.paramMap.get("tid");
    this.getTaskDetails();
  }

  addcomment() { 
    let taskID=this.taskID;   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    dialogConfig.data = { taskID };
    this.dialog.open(AddCommentComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }

  getTaskDetails() {
    this.loading = true;
    this.taskservice.getTaskDetails(this.taskID).subscribe((response) => {
      if (response['statusCode'] == 200) {
        this.task = this.taskservice.setTaskDescs(response['data']);
        this.task.taskViewers = this.task.taskViewers.map(view => {
          view['viewerEmpName'] = this.taskservice.getEmpByID(view['viewerEmpId']);
          return view;
        });
      }
      console.log(this.task);
      this.loading = false;
    }, err => {
      this.toastr.tryagain();
      this.loading = false;
    })
  }

}
