import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TasksManagementService } from '../../services/tasks-management.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  subscriptionDDLReqtype: Subscription;
  subscriptionEMplist: Subscription;
  ddltaskstatus: any;
  ddlpriority: any;
  ddltype: any;
  ddlemplist: any;
  isLoading = true;
  subscriptions;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private toastr: AppToasterService, private taskservice: TasksManagementService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.AddReqForm = fb.group({
      //'requestType': [this.id],
      'title': ['', [Validators.required]],
      'description': [''],
      'assignedTo': ['', [Validators.required]],
      'viewers': [[]],
      'status': ['1'],
      'priority': [''],
      'type': [''],
      'requiredProcedures': [''],
      'startDate': [''],
      'endDate': [''],
      'notes': ['']

    });
  }

  onFormSubmit(event) {
    this.submitted = true;
    //this.isLoading = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }

    this.taskservice.AddTasksdata(submitdatavalue).subscribe(addedtask => {
      if (!addedtask['saveTask']) {
        var error = (addedtask as any).data["errorMassege"]
        this.toastr.push([{ type: 'error', 'body': error }]);
      } else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved') }]);
        //this.isLoading = false;
        //navigate

      }
    }

    );
  }

  ngOnInit() {
    this.getDDLlist();
    this.getDDLEmplist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getDDLlist();
      this.getDDLEmplist();
    });

  }
  get f() { return this.AddReqForm.controls; }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }


  defineDDLList() {
    if (this.taskservice.ddl) {
      this.ddltaskstatus = this.taskservice.ddl["TaskStatusList"];
      this.ddlpriority = this.taskservice.ddl["taskPriorityList"];
      this.ddltype = this.taskservice.ddl["taskTypesList"];
    }

  }
  getDDLlist() {
    this.taskservice.loadDDL();
    this.defineDDLList();
    this.subscriptionDDLReqtype = this.taskservice.ddlsubject.subscribe(reqtype => {
      this.defineDDLList();
    });
  }
  getDDLEmplist() {
    this.ddlemplist = this.taskservice.empList;
    this.subscriptionEMplist = this.taskservice.empListsubject.subscribe(emplist => {
      this.ddlemplist = this.taskservice.empList;
    });
    // this.isLoading = true
    // this.subscriptionEMplist = this.taskservice.getDDLEmplist().subscribe(emplist => {
    //   if (emplist) {
    //     this.ddlemplist = (emplist as any).data
    //     this.isLoading = false
    //   } else {
    //   }
    // });
  }


}
