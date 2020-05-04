import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

import { TranslateService } from '@ngx-translate/core';
import { AdministrativeService } from '../../services/administrative.service';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-penalty-discount',
  templateUrl: './penalty-discount.component.html',
  styleUrls: ['./penalty-discount.component.css']
})
export class PenaltyDiscountComponent implements OnInit {
  p: number;
  filter;
  searchTerm: string;
  config: any;
  getepanaltydata;
  subscription: Subscription;
  messages;
  printdata;
  constructor(private http: HttpClient, private adminservice: AdministrativeService, private translate: TranslateService) { }
  isLoading = true;
  subscriptions;
  ngOnInit() {
    this.loadpanaltydata();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.loadpanaltydata();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  loadpanaltydata() {

    this.isLoading = true
    this.subscription = this.adminservice.getpanaltydiscount().subscribe(getpandisc => {
      //console.log("emp info",getpandisc)
      if (getpandisc) {
        this.getepanaltydata = (getpandisc as any).data["managerialDuties"];
        this.isLoading = false;
      } else {
        this.messages = [];
      }
    });
  }

  printreport(decisionNo, decisionDate, absentDate) {
    this.subscription = this.adminservice.getpandiscreport(decisionNo, decisionDate, absentDate).subscribe(getreport => {
      //console.log("emp info",getreport)
      if (getreport) {
        this.printdata = getreport['data'];
        const fileName = "panalty_discount" + '_' + new Date().getTime() + '.pdf';
        const pdfcont = atob(this.printdata);
        var blob = new Blob([pdfcont], { type: "application/pdf" });
        fileSaver.saveAs(blob, fileName);
      } else {
        this.messages = [];
      }
    });
  }


}
