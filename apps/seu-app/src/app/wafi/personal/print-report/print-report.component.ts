import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.css']
})
export class PrintReportComponent implements OnInit {
  subscription: Subscription;
  subscriptiondownlaod: Subscription;
  subscriptiondownlaod_housing: Subscription;
  printreport: any;
  printreportddwonld: any;
  printreportddwonld_house: any;
  subscriptions;
  inputValue: any;
  constructor(private empservice: EmployeesService, private translate: TranslateService, private toaster: AppToasterService) { }
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
  getprintreport() {

    this.isLoading = false
    //   this.subscription = this.empservice.getprintreport("hr_rep488",this.inputValue).subscribe(rpt => {
    //    if (rpt) {       
    //      this.printreport = (rpt as any).data;
    //      ////console.log("emp printreport",this.printreport);      
    //      this.isLoading = false;      
    //    } else {       
    //      //this.messages = [];
    //    }
    //  });

  }

  getprintreportdownlaod(rptname: any, fName = 'PRINT') {

    this.isLoading = true
    this.subscriptiondownlaod = this.empservice.getprintreport(rptname, this.inputValue == null ? "" : this.inputValue).subscribe(prtrpt => {
      if (prtrpt['statusCode'] == 200) {
        const fileName = fName + '.pdf';
        const pdfcont = atob(prtrpt['data']);
        var blob = new Blob([pdfcont], { type: "application/pdf" });
        fileSaver.saveAs(blob, fileName);
        this.isLoading = false
      } else {
        this.toaster.tryagain();

        //this.messages = [];
      }
    });

  }

  getprintreportdownlaod_housing(rptname: any) {

    this.isLoading = true
    this.subscriptiondownlaod_housing = this.empservice.getprintreport_housing(rptname).subscribe(prtrpthouse => {
      if (prtrpthouse['statusCode'] == 200) {
        //window.open("data:application/pdf;base64,"+prtrpthouse['data']);
        const fileName = 'housing.pdf';
        const pdfcont = atob(prtrpthouse['data']);
        var blob = new Blob([pdfcont], { type: "application/pdf" });
        fileSaver.saveAs(blob, fileName);
        this.isLoading = false
      } else {
        this.toaster.tryagain();
      }
    });

  }

}
