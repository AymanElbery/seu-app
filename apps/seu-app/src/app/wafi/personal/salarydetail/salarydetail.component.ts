import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  

@Component({
  selector: 'app-salarydetail',
  templateUrl: './salarydetail.component.html',
  styleUrls: ['./salarydetail.component.css']
})
export class SalarydetailComponent implements OnInit {
  subscription: Subscription;
  saldetails:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<SalarydetailComponent>,private empservice:EmployeesService) { }
  isLoading = true;
  ngOnInit() {
    this.isLoading = true;
    this.subscription =  this.empservice.getEmpsalaryDetail(this.data.month,this.data.year).subscribe(sldetail => {
      if (sldetail) {
        this.saldetails = (sldetail as any).data;
        this.isLoading = false;
      } else {
        
        //this.messages = [];
      }
    }); 

  }

}
