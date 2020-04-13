import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.css']
})
export class PayFeeComponent implements OnInit {
  studentdata;
  constructor(private admissionUgservice: AdmisionUgService, private router: Router) { }

  ngOnInit() {
    // if(!localStorage.getItem('token')){
    //   this.router.navigate(['/apps/admission-ug/ug-login/'])
    // }
    this.studentdata = this.admissionUgservice.LoggedInUser;
    // this.message=this.admissionUgservice.message;
    // this.notice=this.admissionUgservice.notice;
    console.log("studeentdata", this.studentdata);
  }

}
