import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { Employee } from '../personalinfo/employee';  
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/common';
import { SalarydetailComponent } from '../salarydetail/salarydetail.component.tns';


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
  years:ValueItem<number>[] = [];
  yearsDropDown;
  isLoading = true;
  subscriptions;
  selectYear = "";
  indexDropdown: number=0;
  constructor(private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService,
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef) { }

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
       console.log("salary year",this.salaryyears,this.salaryyears[0]);   
       for (let i = 0; i < this.salaryyears.length; i++) {
        this.years.push(
          {
            value: this.salaryyears[i],
            display: this.salaryyears[i]
          }
        );
      } 
      this.yearsDropDown = new ValueList(this.years);  
       this.isLoading = false;      
     } else {       
       this.messages = [];
     }
   });
  
} 

getempsalaryyearwise(year:any){
this.selectYear = year;
console.log("year",year);      

  this.isLoading = true
  this.subscription = this.empservice.getEmpsalary(year).subscribe(empsalary => {
   if (empsalary) {       
     this.Empsalary = (empsalary as any).data;
     console.log("emp salary",this.Empsalary);      
   } else {       
     this.messages = [];
   }
   this.isLoading = false;      

 });

}

getsalarydetail(orderItemIndex, month,year) {
  
   const options: ModalDialogOptions = {
       viewContainerRef: this._vcRef,
       context: {month,year},
       fullscreen: false,
   };
 
   this._modalService.showModal(SalarydetailComponent, options)
       .then( result => {
 
       }
   );
  }
  getYear(val: SelectedIndexChangedEventData) {
    const code = this.yearsDropDown.getValue(val.newIndex);
    this.indexDropdown=val.newIndex;
    this.selectYear=code;
    this.getempsalaryyearwise(code);
  }

  onLoadedDropDown(dropdown){
    dropdown.selectedIndex=this.indexDropdown;
  }
}
