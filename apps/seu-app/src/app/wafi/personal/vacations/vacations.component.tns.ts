import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service'; 
import { TranslateService } from '@ngx-translate/core';
import { SelectedIndexChangedEventData, ValueItem, ValueList } from 'nativescript-drop-down';
@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.tns.html',
  styleUrls: ['./vacations.component.tns.css']
})
export class VacationsComponent implements OnInit {

  subscription: Subscription;
  vacationstype:any;
  vacations;
  VacationAbsenceBalance:any;
  VacationReservedBalance:any;
  VacationBalance:any;
  subscriptions;
  vacationsArray:ValueItem<number>[] = [];
  vacationsDropDown;
  clicked: any;
  constructor(private empservice:EmployeesService,private translate: TranslateService) { }
  isLoading = true;
  selectvactype :number;
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
       for (let i = 0; i < this.vacationstype.length; i++) {
        this.vacationsArray.push(
          {
            value: this.vacationstype[i].value,
            display: this.vacationstype[i].label
          }
        );
      }
      this.vacationsDropDown = new ValueList(this.vacationsArray);
         
       this.isLoading = false;      
     } else {       
       //this.messages = [];
     }
   });
  
  }

  getempvactions(vacationCode:any){
    this.selectvactype=vacationCode;
    ////console.log("ddl val",this.selectvactype);
    this.isLoading = true
    let currentDate = new Date();

    this.subscription = this.empservice.getVacation(vacationCode,"sysdate").subscribe(empvacation => {
     if (empvacation) {  
       this.vacations = (empvacation as any).data["VacationDetails"];
       this.VacationReservedBalance = (empvacation as any).data["VacationReservedBalance"];
       this.VacationAbsenceBalance = (empvacation as any).data["VacationAbsenceBalance"];
       this.VacationBalance = (empvacation as any).data["VacationBalance"];
      // //console.log("emp vacations",this.vacations);      
      
     } else {       
       //this.messages = [];
    }
    this.isLoading = false;      
   });
  
  }
  getVacation(val: SelectedIndexChangedEventData) {
    const code = this.vacationsDropDown.getValue(val.newIndex);
    this.selectvactype=val.newIndex;
    this.getempvactions(code);
  }

  onLoadedDropDown(dropdown){
    dropdown.selectedIndex=this.selectvactype;
  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }
}
