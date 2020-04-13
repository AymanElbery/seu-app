import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-ug-veryfication',
  templateUrl: './ug-veryfication.component.html',
  styleUrls: ['./ug-veryfication.component.css']
})
export class UgVeryficationComponent implements OnInit {

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
        'code': ['', [Validators.required]]
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
    
      this.submitted = true;
      this.admissionUgservice.getverification(localStorage.getItem('token'),submitdatavalue.code).subscribe(resverify => {      
      //console.log("verific",resverify);
        this.status = (resverify as any).status;  
        this.admissionUgservice.LoggedInUser = (resverify as any).data["info"]["student_data"];
        this.admissionUgservice.studentDataDetails=(resverify as any).data["info"];
        //console.log("message",this.admissionUgservice.LoggedInUser);
        this.router.navigate(['/apps/admission-ug/pay-fee/'])   

       if (0==0) {     
                

         

          
          // this.admissionUgservice.message=(resverify as any).message;
          // this.admissionUgservice.notice=(resverify as any).data["notice"];
               
          // localStorage.setItem("logedin","true");
          this.submitted = false;
        }
          
         else {
          var erromsg = resverify['messages']['body'];
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
  