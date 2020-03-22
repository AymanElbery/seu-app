import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {TasksManagementService} from '../../services/tasks-management.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { BsDatepickerConfig  } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;
  vacationsbal;
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
      'status': [''],
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
    console.log("submit data", submitdatavalue);
   
    this.taskservice.getTasksList().subscribe(contacts => {
      //console.log("saved ", contacts);
      if (!contacts['saveRequesst']) {
        var error = (contacts as any).data["errorMassege"]       
        this.toastr.push([{ type: 'error', 'body': error }]);
      }else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved')}]);
        //this.isLoading = false;
//navigate
      this.router.navigate(['/wafi/employee-requests'])
      }
    }
     
    );

   
  }
  
  
  ngOnInit() {

    this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType();
    });

  }
  get f() { return this.AddReqForm.controls; }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  FillDDLReqType() {
    this.isLoading = true
    //this.AddReqForm.controls['requestType'].setValue(this.id);
   
  }


}
