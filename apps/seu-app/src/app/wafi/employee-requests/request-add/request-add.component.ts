
import { Component, OnInit,  Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable ,  Subscription } from 'rxjs';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {
  AddReqForm: any;
  reqtype: any;
  subscriptionDDLReqtype: Subscription;
  constructor(private empreqservice: EmployeeRequestsService,
              private fb: FormBuilder,
              private translate: TranslateService,
              private router: Router) {
    this.AddReqForm = fb.group({
      reqtype: ['', [Validators.required]]

    });

  }

  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType();
    });

  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }


  get f() { return this.AddReqForm.controls; }


  FillDDLReqType() {   this.isLoading = true;
                       this.subscriptionDDLReqtype = this.empreqservice.getDDLReqType().subscribe(reqtype => {
      if (reqtype) {
        this.reqtype = reqtype;
        this.reqtype = (reqtype as any).data;
        // console.log("reqtype data",this.reqtype);
        this.isLoading = false;
      } else {
            }
    });
  }


  getrequesttype(requestindex, reqtypeval: any) {

    // console.log("reqtyep",reqtypeval);

switch (reqtypeval) {

    case '1':

      this.router.navigate(['/wafi/employee-requests/vacation-request', reqtypeval]);
      break;
    case '6':
      this.router.navigate(['/wafi/employee-requests/vacation-request', reqtypeval]);
      break;
    case '34':
      this.router.navigate(['/wafi/employee-requests/attend-course-request', reqtypeval]);
      break;
    case '37':
      this.router.navigate(['/wafi/employee-requests/regular-leave-request', reqtypeval]);
      break;
    case '65':
      this.router.navigate(['/wafi/employee-requests/evacuate-party-request', reqtypeval]);
      break;
    default:
        // console.log("No such reqtype exists!");
        break;
}


  }

  onFormSubmit(event) {
    // this.submitted = true;
    const employee = this.AddReqForm.value;
    // console.log("submit data",employee);
    // event.preventDefault();
   // this.formSubmitted = true;
    if (this.AddReqForm.invalid) {
      return;
  }
    // if (this.form.valid) {
    //   //console.log(this.form.value); // Process your form
    // }
    // this.addrequestsdata(employee);
  }



}
