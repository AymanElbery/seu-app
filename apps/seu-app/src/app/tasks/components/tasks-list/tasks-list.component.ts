import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import {AddTaskComponent} from '../add-task/add-task.component';
import {TasksManagementService} from '../../services/tasks-management.service';

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
  subscription: Subscription;
  subscriptionappreq: Subscription;
  gettasklist: any;
  constructor(private http: HttpClient, private taskservice: TasksManagementService, private toastr: AppToasterService, private translate: TranslateService, private dialog: MatDialog) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getTasksList();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getTasksList();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  getTasksList() {

    //this.isLoading = true
    this.subscriptionappreq = this.taskservice.getTasksList().subscribe(appreqs => {
      if (appreqs) {
        this.gettasklist = this.taskservice.prepareList((appreqs as any).data);
        console.log("data",this.gettasklist);      
        this.isLoading = false;
      } else {

      }
    });

  }

  addtask() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "75%";
    dialogConfig.data = {  };
    this.dialog.open(AddTaskComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }

}

