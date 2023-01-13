import { Component, OnInit, OnDestroy,ViewChildren } from '@angular/core';
import { Lecture } from 'src/app/shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';
import { TranslateService } from '@ngx-translate/core';
import {PrintButtonDirective} from '../../seucommon/print-button.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.scss']
})
export class CertificateIDComponent implements OnInit, OnDestroy {
  @ViewChildren(PrintButtonDirective) dirs;

  constructor(
    private transalte: TranslateService, 
    private certificateIDService: CertificateIDService,
    private router: Router
  ) {
    this.router.navigate(['/statements']);
  }
  certificateDetails;
  arabicPrint: string;
  EngPrint: string;

  lectures: Lecture[];
  isLoading = false;

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    });
  }
  isClosed = false;
  messagesList = [];
  getReqs() {
    this.isLoading = true;
    this.arabicPrint = this.certificateIDService.DownloadCertificate();
    this.EngPrint = this.certificateIDService.DownloadEngCertificate();

    this.certificateIDService.getCertificateID().then(
      (res) => {
       // res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.certificateDetails = ((res) as any).data;
        this.lectures = (((res) as any).data as any).Lectures;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
	  
        this.isLoading = false;
      }
    );
  }
 

  

}
