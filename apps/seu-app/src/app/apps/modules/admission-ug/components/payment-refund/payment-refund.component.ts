import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-refund',
  templateUrl: './payment-refund.component.html',
  styleUrls: ['./payment-refund.component.css']
})
export class PaymentRefundComponent implements OnInit {
  subscriptionsdata: Subscription;
  details:any=[];
  have_withdraw;
  messageNodata;
  isLoading = false;
  AddReqForm: FormGroup;
  submitted = false;
  flagdetail=false;
  constructor(private toastr: AppToasterService, private admissionUgservice: AdmisionUgService, private translate: TranslateService, private router: Router,private fb: FormBuilder, public globalService: GlobalBaseService) { 

    this.AddReqForm = fb.group({
      'name': ['', [Validators.required]],      
      'email': ['', [Validators.required,Validators.email]],
      'agreement': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
      'mobile2': [''],
      'phone': ['', [Validators.required]],
      'token': [''],
    
      
    });

  }

  ngOnInit() {
    this.paymentrefund();
  }
  
  paymentrefund() {
    this.isLoading = true;
    this.subscriptionsdata = this.admissionUgservice.paymentrefund(this.globalService.getItem(this.admissionUgservice.tokenKey)).subscribe(respayref => {
   // console.log("responsedata",respayref);    
   
     const status = respayref['status'];     
      if (status == 0) {                    
        this.isLoading = false
        this.flagdetail=false;
        this.have_withdraw = (respayref as any).data["0"]["have_withdraw"]
        
        if (this.have_withdraw && (respayref as any).data["0"]["details"].length!='') {

           this.details=(respayref as any).data["0"]["details"];           
            this.have_withdraw = (respayref as any).data["0"]["have_withdraw"]
            this.flagdetail=true;
            this.isLoading = false      
          
        }
        else{
          //console.log(this.messageNodata);
          this.messageNodata = (respayref as any).messages["0"]["body"];
          this.flagdetail=false;
        }
        console.log("truefalse",this.have_withdraw,this.flagdetail);
        
      }
    },
      err => {
        this.toastr.tryagain();
        this.isLoading = false

      }
    );
  }
  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }
    this.submitted = true;
    this.AddReqForm.controls['token'].setValue(this.globalService.getItem(this.admissionUgservice.tokenKey));
    this.admissionUgservice.Reqpaymentrefund(this.AddReqForm.value).subscribe(resreq => {
      
      if (resreq['data']['messages']) {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('request_saved') }]);
        this.submitted = false;
        this.paymentrefund();
      } else if (!resreq['status']) {
        this.toastr.push(resreq['messages']);       
        this.submitted = false;

      } else {
        this.toastr.push([{ type: 'error', 'body': resreq['data']['message'] }]);        
        this.submitted = false;
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
