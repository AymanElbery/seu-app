import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.css']
})
export class PrintReportComponent implements OnInit {
  subscription: Subscription;
  subscriptiondownlaod: Subscription;
  subscriptiondownlaod_housing: Subscription;
  printreport:any;
  printreportddwonld:any;
  printreportddwonld_house:any;
  subscriptions;
  inputValue:any;
  constructor(private empservice:EmployeesService,private translate: TranslateService) { }
  isLoading = true;
  ngOnInit() {
    this.isLoading = true
    this.getprintreport();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getprintreport();
      
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  onKey(event) {
     this.inputValue = event.target.value;
  }
  getprintreport(){

    this.isLoading = false
  //   this.subscription = this.empservice.getprintreport("hr_rep488",this.inputValue).subscribe(rpt => {
  //    if (rpt) {       
  //      this.printreport = (rpt as any).data;
  //      //console.log("emp printreport",this.printreport);      
  //      this.isLoading = false;      
  //    } else {       
  //      //this.messages = [];
  //    }
  //  });
  
  }

  getprintreportdownlaod(rptname:any){
//console.log("report name",rptname);
    this.isLoading = true   
    this.subscriptiondownlaod = this.empservice.getprintreport(rptname,this.inputValue==null?"":this.inputValue).subscribe(prtrpt => {
     if (prtrpt) {       
       this.printreportddwonld = (prtrpt as any).data;
      
  window.open(this.printreportddwonld, '_blank');  
  this.isLoading = false
     } else {       
       //this.messages = [];
     }
   });
  
  }

  getprintreportdownlaod_housing(rptname:any){
    
        this.isLoading = true   
        this.subscriptiondownlaod_housing = this.empservice.getprintreport_housing(rptname).subscribe(prtrpthouse => {
         if (prtrpthouse) {       
           this.printreportddwonld_house = (prtrpthouse as any).data;
          // console.log("report data",this.printreportddwonld_house);
      window.open(this.printreportddwonld_house, '_blank');  
      this.isLoading = false
         } else {       
           //this.messages = [];
         }
       });
      
      }

}
