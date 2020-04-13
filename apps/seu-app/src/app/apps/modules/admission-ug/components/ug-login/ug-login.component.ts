import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-ug-login',
  templateUrl: './ug-login.component.html',
  styleUrls: ['./ug-login.component.css']
})
export class UgLoginComponent implements OnInit {

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
      if (this.AddReqForm.invalid) {
        return;
      }
      if (!this.cpatchval) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant('selectcapctha') }]);
        return;
      }
    
      this.submitted = true;
      this.admissionUgservice.getloginstatus(submitdatavalue.ssn).subscribe(reslogin => {      
      console.log("reslogin",reslogin);
        this.status = (reslogin as any).status;  
        
       if (this.status==1) {     
console.log("ststuas",this.status);
          // this.admissionUgservice.token=(reslogin as any).data["token"];
           localStorage.setItem('token', (reslogin as any).data["token"]);
           
           this.router.navigate(['/apps/admission-ug/ug-verification/'])       
       
          this.submitted = false;
        }
          
         else {
         // var erromsg = resdttaus['data']['errmsg'];
         // this.toastr.push([{ type: 'error', 'body': erromsg }]);
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
  