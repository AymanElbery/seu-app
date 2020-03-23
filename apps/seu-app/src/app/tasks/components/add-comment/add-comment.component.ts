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

  constructor(@Inject(MAT_DIALOG_DATA) public data,private route: ActivatedRoute, private toastr: AppToasterService, private taskservice: TasksManagementService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.AddReqForm = fb.group({
      'taskId': [this.data.taskID],  
      'commentText': ['', [Validators.required]],     
      'assignTo': ['',[Validators.required]],
      'taskStatus': [''],
      'file':['']
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
    this.ddlemplist = this.taskservice.empList;
    this.subscriptionEMplist = this.taskservice.empListsubject.subscribe(emplist => {
      this.ddlemplist = this.taskservice.empList;
    });
   
  }

  onFormSubmit(event) {
    this.submitted = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }

    console.log("submit data", submitdatavalue);

    this.taskservice.AddTaskscommnets(submitdatavalue).subscribe(addcmt => {
      console.log("saved data", addcmt);
      if (!addcmt['assignedToChanged']) {
        //var error = (addcmt as any).data["errorMassege"]
        //console.log("response data",error);
        this.toastr.push([{ type: 'error', 'body':"error" }]);

      } else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved') }]);        
      }
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
