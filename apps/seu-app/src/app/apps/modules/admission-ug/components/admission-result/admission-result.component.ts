import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-admission-result',
  templateUrl: './admission-result.component.html',
  styleUrls: ['./admission-result.component.css']
})
export class AdmissionResultComponent implements OnInit {
subcriptionGetResSttaust:Subscription;
cpatchval;
getresult;
AddReqForm: FormGroup;
submitted = false;
studentData;
status;
message;
  constructor(private toastr: AppToasterService,private admissionUgservice: AdmisionUgService, private fb: FormBuilder, private translate: TranslateService, private router: Router) { 
    this.AddReqForm = fb.group({
      'ssn': ['', [Validators.required]]
    });
  }
  
  isLoading = true;

  resolved(captchaResponse: string) {
    this.cpatchval=captchaResponse;
        //console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
  ngOnInit() {
    
    this.isLoading = false;
  }

  onFormSubmit() {
    let submitdatavalue = (this.AddReqForm.value);
    //console.log(this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }
    if (!this.cpatchval) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant('selectcapctha') }]);
      return;
    }
  
    this.submitted = true;
    this.admissionUgservice.getresstatus(submitdatavalue.ssn).subscribe(resdttaus => {      
    // console.log("error",resdttaus);
      this.status = (resdttaus as any).status;  
      
     if (this.status==true) {     
        this.admissionUgservice.studentDataDetails=(resdttaus as any).data["student_data"];
        this.admissionUgservice.message=(resdttaus as any).data["message"];
        this.admissionUgservice.notice=(resdttaus as any).data["notice"];
        this.router.navigate(['/apps/admission-ug/display-result/'])       
     
        this.submitted = false;
      }
        
       else {
        var erromsg = resdttaus['data']['errmsg'];
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
