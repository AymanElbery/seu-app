import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/wafi/services/employees.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<UpdateinfoComponent>,
  private route: ActivatedRoute, private toastr: AppToasterService,private fb: FormBuilder,private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService, private router: Router) { 
    this.AddReqForm = fb.group({      
      'email': [data.updateinfo[12]["data"], [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],//data.updateinfo[12]["data"],
      'mobile_no': [data.updateinfo[13]["data"],[Validators.required]],
      'phone_no': [data.updateinfo[14]["data"],[Validators.required]],
      'address': [data.updateinfo[15]["data"],[Validators.required]],
      'address_s':[data.updateinfo[16]["data"],[Validators.required]],
      'preferred_lang_sms': data.updateinfo[17]["data"]=="Arabic Languge"?2:1      
    });
  }
  subscriptions;
  ngOnInit() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
     
    });
  }

  onFormSubmit() {
    let submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }     
    this.submitted = true;
    this.empservice.updateEmpInfo(submitdatavalue).subscribe(updateinfo => {
     // console.log("response",updateinfo);
      if (updateinfo['statusDesc'] == "success") {       
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.updatedsuccess') }]);
        this.submitted = false;        
        this.dialogRef.close();
      } else {
        var erromsg = updateinfo['data']['errmsg'];
        this.toastr.push([{ type: 'error', 'body': erromsg }]);
      }
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
    }
    );

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
