import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service'; 
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {

  subscription: Subscription;
  vacationstype:any;
  vacations;
  VacationAbsenceBalance:any;
  VacationReservedBalance:any;
  VacationBalance:any;
  subscriptions;
  constructor(private empservice:EmployeesService,private translate: TranslateService) { }
  isLoading = true;
  selectvactype = "";
  ngOnInit() {
    this.getvacationstype();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getvacationstype();
      //this.getempvactions(this.selectvactype);
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  getvacationstype(){

    this.isLoading = true
    this.subscription = this.empservice.getvacationstype(1,1).subscribe(vactype => {
     if (vactype) {       
       this.vacationstype = (vactype as any).data;

       //this.getempvactions(this.selectvactype?this.selectvactype:-1);
       //console.log("emp vacations",this.vacationstype);      
       this.isLoading = false;      
     } else {       
       //this.messages = [];
     }
   });
  
  }

  getempvactions(vacationCode:any){
    this.selectvactype=vacationCode;
    //console.log("ddl val",this.selectvactype);
    this.isLoading = true
    let currentDate = new Date();

    this.subscription = this.empservice.getVacation(vacationCode,"sysdate").subscribe(empvacation => {
     if (empvacation) {       
       this.vacations = (empvacation as any).data["VacationDetails"];
       this.VacationReservedBalance = (empvacation as any).data["VacationReservedBalance"];
       this.VacationAbsenceBalance = (empvacation as any).data["VacationAbsenceBalance"];
       this.VacationBalance = (empvacation as any).data["VacationBalance"];
      // console.log("emp vacations",this.vacations);      
      
       this.isLoading = false;      
     } else {       
       //this.messages = [];
     }
   });
  
  }

}
