import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { Employee } from '../personalinfo/employee';  
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {SalarydetailComponent} from '../salarydetail/salarydetail.component';


@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  salaryyears;
Empsalary;
  messages: any[] = [];
  subscription: Subscription;
  
  constructor(private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService,private dialog: MatDialog) { }

  isLoading = true;
  subscriptions;
selectYear = "";
  ngOnInit() {
    this.getsalaryyears();
    
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getsalaryyears();
      
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  getsalaryyears() {  
    this.isLoading = true
    this.subscription = this.empservice.getsalaryyear().subscribe(salyear => {
     if (salyear) {       
       this.salaryyears = (salyear as any).data;
       this.getempsalaryyearwise(this.selectYear?this.selectYear:this.salaryyears[0]);
       ////console.log("salary year",this.salaryyears,this.salaryyears[0]);      
       this.isLoading = false;      
     } else {       
       this.messages = [];
     }
   });
  
} 

getempsalaryyearwise(year:any){
this.selectYear = year;
  this.isLoading = true
  this.subscription = this.empservice.getEmpsalary(year).subscribe(empsalary => {
   if (empsalary) {       
     this.Empsalary = (empsalary as any).data;
     ////console.log("emp salary",this.Empsalary);      
     this.isLoading = false;      
   } else {       
     this.messages = [];
   }
 });

}

getsalarydetail(orderItemIndex, month,year) {
 // //console.log("salar param",month,year);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    
   dialogConfig.data = {   month,year };
    this.dialog.open(SalarydetailComponent, dialogConfig).afterClosed().subscribe(res => {
      //this.loadAlldata();
    });
  }

}
