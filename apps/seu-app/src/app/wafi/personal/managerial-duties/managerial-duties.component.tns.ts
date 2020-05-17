import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { Employee } from '../personalinfo/employee';  
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';


@Component({
  selector: 'app-managerial-duties',
  templateUrl: './managerial-duties.component.tns.html',
  styleUrls: ['./managerial-duties.component.tns.css']
})
export class ManagerialDutiesComponent implements OnInit {
 
  p: number;
  filter;
  searchTerm: string;
  config: any;
  mangerialdutiesdata; 
  subscription: Subscription;
  messages;
  constructor(private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService, private dialog: MatDialog) { }
  isLoading = true;
  subscriptions;
  ngOnInit() {
    this.loaddutiesdata();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.loaddutiesdata();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  loaddutiesdata() {  
    
    this.isLoading = true
    this.subscription = this.empservice.getmanagerialduties().subscribe(managduties => {
     // console.log("emp info",this.empInfo)
      if (managduties) {       
       this.mangerialdutiesdata = (managduties as any).data["managerialDuties"];                 
       this.isLoading = false;      
     } else {       
       this.messages = [];
     }
   });
}


}
