import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../../shared/services/app-toaster';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.tns.html',
  styleUrls: ['./training.component.tns.css']
})
export class TrainingComponent implements OnInit,OnDestroy {
  p: number;
  filter; 
  config: any;
  subscriptiontraininglist: Subscription;
  emplisttraining: any;
  clicked: any;
  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getEmptraining();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getEmptraining();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  getEmptraining() {

    this.isLoading = true
    this.subscriptiontraininglist = this.empreqservice.gettraininglist().subscribe(emptraining => {
      if (emptraining) {
        this.emplisttraining = (emptraining as any).data["trainingTable"];
        //console.log("emp lett",this.emplisttraining);      
        this.isLoading = false;
    }},
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }

  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }

}