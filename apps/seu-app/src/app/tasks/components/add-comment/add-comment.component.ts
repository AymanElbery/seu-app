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

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  ddltaskstatus: any;
  ddlemplist: any;
  fileToUpload: File = null;
  subscriptionDDLReqtype: Subscription;
  subscriptionEMplist: Subscription;

  isLoading = true;
  subscriptions;

  private sub: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCommentComponent>,
    private route: ActivatedRoute, private toastr: AppToasterService, private taskservice: TasksManagementService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.AddReqForm = fb.group({
      'taskId': [this.data.taskID],
      'commentText': ['', [Validators.required]],
      'assignTo': [''],
      'taskStatus': [''],
      'file': ['']
    });
  }

  showAssign = false;
  showStatus = true;

  ngOnInit() {

    if (this.data['type'] == 'status') {
      this.showStatus = false;
      this.AddReqForm.controls['taskStatus'].setValue(this.data['code']);
      switch (this.data['code']) {
        case 3:
          this.showAssign = true;
          this.AddReqForm.controls['assignTo'].setValidators([Validators.required]);
          break;
        default:
          this.showAssign = false;
          break;
      }
    }

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
    this.getddleList(true);
    this.subscriptionEMplist = this.taskservice.empListsubject.subscribe(emplist => {
      this.getddleList(true);
    });

  }
  showFav = true;
  allowFav = false;
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

  onFormSubmit() {
    let submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }
    if (submitdatavalue.taskStatus == 1 && submitdatavalue.assignTo) {
      return false;
    }
    //console.log("submit data", submitdatavalue);
    if (!submitdatavalue['assignTo']) {
      delete submitdatavalue['assignTo'];
    }
    if (!submitdatavalue['taskStatus']) {
      delete submitdatavalue['taskStatus'];
    }
    if (!submitdatavalue['file']) {
      delete submitdatavalue['file'];
    }
    this.submitted = true;
    this.taskservice.AddTaskscommnets(submitdatavalue).subscribe(addcmt => {
      if (!addcmt['data']['saveTaskComment']) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("general.error") }]);
      } else {
        this.taskservice.loadStats();
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('general.request_saved') }]);
        this.submitted = false;
        this.taskservice.dialogCloseRefresh = true;
        this.dialogRef.close();
      }
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
    }
    );

  }
  handleFileInput(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.AddReqForm.controls['file'].setValue(reader.result);
  }

}
