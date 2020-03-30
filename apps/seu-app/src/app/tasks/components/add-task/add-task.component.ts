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
  subscriptionDDLReqtype: Subscription;
  subscriptionEMplist: Subscription;
  ddltaskstatus: any = [];
  ddlpriority: any = [];
  ddltype: any = [];
  ddlemplist: any = [];
  isLoading = false;
  submitted = false;

  subscriptions;
  id: number;

  showFav = false;
  allowFav = false;

  constructor(private route: ActivatedRoute, private toastr: AppToasterService, private taskservice: TasksManagementService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.taskservice.reloadList();
    this.AddReqForm = fb.group({
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'assignedTo': ['', [Validators.required]],
      'taskViewers': [[]],
      'status': ['1'],
      'priority': ['1'],
      'type': ['1'],
      'requiredProcedures': ['', [Validators.required]],
      'startDate': ['', [Validators.required]],
      'endDate': ['', [Validators.required]],
      'file': [''],
      'notes': ['']
    });
  }

  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }
    const submitdatavalue = (this.AddReqForm.value);
    let submitdatavalueadeddate = (this.AddReqForm.value);
    submitdatavalueadeddate.taskViewers = submitdatavalueadeddate.taskViewers.map(vid => { return { viewerEmpId: vid } })
    submitdatavalueadeddate['startDate'] = ((moment(submitdatavalue.startDate, "YYYY-MM-DD").format("DD-MM-YYYY")));
    submitdatavalueadeddate['endDate'] = (moment(submitdatavalue.endDate, "YYYY-MM-DD").format("DD-MM-YYYY"));

    if (!this.validateFile(submitdatavalue.attachment)) {      
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("Selected file format is not supported") }]);
      return false;
  }

    this.isLoading = true;
    this.submitted = true;

    this.taskservice.AddTasksdata(submitdatavalueadeddate).subscribe(addedtask => {
      if (addedtask['data']['saveTask'] == true) {
        this.taskservice.loadStats();
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('general.request_saved') }]);
        this.router.navigate(['/tasks/createdTasks'])
      } else {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("general.error") }]);
      }
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.getDDLlist();
    this.getDDLEmplist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getDDLlist();
      this.getDDLEmplist();
    });

  }

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
  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'pdf') {
        return true;
    }
    else if (ext.toLowerCase() == 'docx') {
      return true;
   }
   else if (ext.toLowerCase() == 'doc') {
    return true;
 }
    else if (ext.toLowerCase() == 'zip') {
      return true;
    }
    else if (ext.toLowerCase() == 'rar') {
    return true;
    }
    else if (ext.toLowerCase() == 'jpg') {
   return true;
    }
    else if (ext.toLowerCase() == 'gif') {
      return true;
    }
   else if (ext.toLowerCase() == 'bmp') {
        return true;
     }
    else {
        return false;
    }
}

  handleFileInput(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!this.validateFile(file.name)) {      
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("Selected file format is not supported") }]);
      return false;
  }

    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.AddReqForm.controls['file'].setValue(reader.result);
  }
  getDDLEmplist() {
    this.getddleList(true);
    this.subscriptionEMplist = this.taskservice.empListsubject.subscribe(r => {
      this.getddleList(true);
    });
  }
  toggleFavList() {
    this.showFav = !this.showFav;
    this.getddleList();
  }

  getddleList(force = false) {
    if (force && this.taskservice.empListFavourit.length) {
      this.allowFav = true;
      this.showFav = true;
    }
    if (this.showFav) {
      this.ddlemplist = this.taskservice.getfaVouriteList();
    } else {
      this.ddlemplist = this.taskservice.empList;
    }
  }



}
