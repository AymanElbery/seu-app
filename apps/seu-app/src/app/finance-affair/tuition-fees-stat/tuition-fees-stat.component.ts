import { Component, OnInit, OnDestroy } from '@angular/core';
import { TuitionFeesService } from '../services/tuition-fees.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-tuition-fees-stat',
  templateUrl: './tuition-fees-stat.component.html',
  styleUrls: ['./tuition-fees-stat.component.scss']
})
export class TuitionFeesStatComponent implements OnInit, OnDestroy {

  feesData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(
    private translate: TranslateService, 
    private toastr: AppToasterService, 
    private academicService: TuitionFeesService,
    private router: Router
  ) { 
    //this.router.navigate(['/statements']);
  }
  ngOnInit() {
    this.getServiceRequest();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getServiceRequest();
    });
  }
  isClosed = false;
  messagesList = [];
  getServiceRequest() {
    this.isLoading = true;
    this.academicService.getِTuitionFeez().then(
      res => {
        //res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.feesData = (res as any).data;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
      }, err => {
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }

}
