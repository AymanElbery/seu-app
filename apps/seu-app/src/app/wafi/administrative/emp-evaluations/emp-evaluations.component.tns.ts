import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../../shared/services/app-toaster';


@Component({
  selector: 'app-emp-evaluations',
  templateUrl: './emp-evaluations.component.tns.html',
  styleUrls: ['./emp-evaluations.component.tns.css']
})
export class EmpEvaluationsComponent implements OnInit {

  p: number;
  filter;
  config: any;
  subscriptionevallist: Subscription;
  emplistevaluations: any;
  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getEmpevaluations();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getEmpevaluations();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getEmpevaluations() {

    this.isLoading = true
    this.subscriptionevallist = this.empreqservice.getEmpevaluations().subscribe(empeval => {
      if (empeval) {
        this.emplistevaluations = (empeval as any).data["evaluationsTable"];
        //console.log("emp app request",this.emplistevaluations);      
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );
  }



}
