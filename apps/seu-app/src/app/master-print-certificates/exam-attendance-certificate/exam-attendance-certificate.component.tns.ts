import { Component, OnInit } from '@angular/core';
import {ExamAttendanceCertificateService} from '../services/exam-attendance-certificate.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-exam-attendance-certificate',
  templateUrl: './exam-attendance-certificate.component.html',
  styleUrls: ['./exam-attendance-certificate.component.scss']
})
export class ExamAttendanceCertificateComponent implements OnInit {
  finalschedule: string;
  final: string;
  termSchedule: string;
  term: string;
  finalscheduleEn: string;
  finalEn: string;
  termScheduleEn: string;
  termEn: string;
  isLoading = false;
  msgs;

  test = {};

  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  reqData;
  status;
  arabicPrintTermWithSchedule: string;
  EngPrintTermWithSchedule: string;
  arabicPrintTermWithoutSchedule: string;
  EngPrintTermWithoutSchedule: string;
  arabicPrintFinalWithSchedule: string;
  EngPrintFinalWithSchedule: string;
  arabicPrintFinalWithoutSchedule: string;
  EngPrintFinalWithoutSchedule: string;

  // tslint:disable-next-line: variable-name
  isFinal_Exam_Without_Schedule = false;
  // tslint:disable-next-line: variable-name
  isFinal_Exam_With_Schedule = false;

  constructor(private translate: TranslateService, private toastr: AppToasterService, private stdData: ExamAttendanceCertificateService) { }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  ngOnInit() {
    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.getReqs();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getReqs();
    })
  
  }
  getReqs() {
    this.isLoading = true;
    this.stdData.getRequest().then
      (res => {
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        console.log("reqdataaaaaaaaaa",this.reqData )
        this.msgs = this.stdData.msgs;
        this.isLoading = false;

        this.arabicPrintTermWithSchedule = this.stdData.Download('Term_Exam_With_Schedule');
        this.EngPrintTermWithSchedule = this.stdData.DownloadEng('Term_Exam_With_Schedule');
    
        this.arabicPrintTermWithoutSchedule = this.stdData.Download('Term_Exam_Without_Schedule');
        this.EngPrintTermWithoutSchedule = this.stdData.DownloadEng('Term_Exam_Without_Schedule');
    
        this.arabicPrintFinalWithSchedule = this.stdData.Download('Final_Exam_With_Schedule');
        this.EngPrintFinalWithSchedule = this.stdData.DownloadEng('Final_Exam_With_Schedule');
    
        this.arabicPrintFinalWithoutSchedule = this.stdData.Download('Final_Exam_Without_Schedule');
        this.EngPrintFinalWithoutSchedule = this.stdData.DownloadEng('Final_Exam_Without_Schedule');
      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      });

  }
  

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  onArabicPrint() {
    utils.openUrl(this.arabicPrintTermWithSchedule);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrintTermWithSchedule);
  }
  onArabicPrintTerm() {
    utils.openUrl(this.arabicPrintTermWithoutSchedule);
  }
  onEnglishPrintTerm() {
    utils.openUrl(this.EngPrintTermWithoutSchedule);
  }
  onArabicPrintFinalSced() {
    utils.openUrl(this.arabicPrintFinalWithSchedule);
  }
  onEnglishPrintFinalSced() {
    utils.openUrl(this.EngPrintFinalWithSchedule);
  }
  onArabicPrintFinal() {
    utils.openUrl(this.arabicPrintFinalWithoutSchedule);
  }
  onEnglishPrintFinal() {
    utils.openUrl(this.EngPrintFinalWithoutSchedule);
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
