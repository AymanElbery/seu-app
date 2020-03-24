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
import { DatePipe } from '@angular/common';
import * as moment from 'moment'

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
      'title': ['', [Validators.required]],
      'description': [''],
      'assignedTo': ['', [Validators.required]],
      'taskViewers': [[]],
      'status': ['1'],
      'priority': [''],
      'type': [''],
      'requiredProcedures': [''],
      'startDate': [''],
      'endDate': [''],
      'file': [''],
      'notes': ['']

    });
  }

  onFormSubmit(event) {
    this.submitted = true;
    this.isLoading = true;

    const submitdatavalue = (this.AddReqForm.value);

    this.AddReqForm.controls['startDate'].setValue((moment(submitdatavalue.startDate, "YYYY-MM-DD").format("DD-MM-YYYY")));
    this.AddReqForm.controls['endDate'].setValue(moment(submitdatavalue.endDate, "YYYY-MM-DD").format("DD-MM-YYYY"));

    const submitdatavalueadeddate = (this.AddReqForm.value);
    submitdatavalueadeddate.taskViewers = submitdatavalueadeddate.taskViewers.map(vid => { return { viewerEmpId: vid } })


    if (this.AddReqForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.taskservice.AddTasksdata(submitdatavalueadeddate).subscribe(addedtask => {
      if (addedtask['data']['saveTask'] == true) {
        this.router.navigate(['/tasks/assignedtasks'])
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved') }]);
      } else {
        this.toastr.push([{ type: 'error', 'body': "error" }]);
      }
      this.isLoading = false;
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
