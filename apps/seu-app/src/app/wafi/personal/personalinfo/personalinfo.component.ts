import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { Employee } from '../personalinfo/employee';  
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit,OnDestroy {
  //allEmployee: Observable<Employee[]>; 
  empInfo;
  messages: any[] = [];
  subscription: Subscription;
  constructor(private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService) { }
  isLoading = true;
  subscriptions;
  ngOnInit() {
    this.loadEmpdata();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.loadEmpdata();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  loadEmpdata() {  
    // subscribe to home component messages
    // this.isLoading = true;
    // this.empservice.getِEmpInfo().then(
    //   res => {
    //     this.empInfo = (res as any).data;
    //     //console.log("emp info",this.empInfo)
    //     this.isLoading = false;
    //   }
    // );
    this.isLoading = true
    this.subscription = this.empservice.getdataEmployees().subscribe(empdata => {
     if (empdata) {
       //console.log("employee data",empdata);
       this.empInfo = (empdata as any).data;
       //this.messages.push(empdata[0]);
       this.isLoading = false;      
     } else {       
       this.messages = [];
     }
   });
}



}
