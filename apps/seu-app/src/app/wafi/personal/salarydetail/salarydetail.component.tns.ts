import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { ModalDialogParams } from 'nativescript-angular/common';

@Component({
  selector: 'app-salarydetail',
  templateUrl: './salarydetail.component.tns.html',
  styleUrls: ['./salarydetail.component.tns.css']
})
export class SalarydetailComponent implements OnInit {
  subscription: Subscription;
  saldetails:any;
  
  constructor(public data: ModalDialogParams , private empservice:EmployeesService) { }
  isLoading = true;
  ngOnInit() {
    this.isLoading = true;
    this.subscription =  this.empservice.getEmpsalaryDetail(this.data.context.month,this.data.context.year).subscribe(sldetail => {
      if (sldetail) {
        this.saldetails = (sldetail as any).data;
        this.isLoading = false;
      } else {
        
        //this.messages = [];
      }
    }); 

  }

  closeDiag() {
    this.data.closeCallback();
  }

}
