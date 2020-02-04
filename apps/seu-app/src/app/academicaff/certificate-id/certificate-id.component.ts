import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lecture } from 'src/app/shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.scss']
})
export class CertificateIDComponent implements OnInit, OnDestroy {

  constructor(private transalte: TranslateService, private certificateIDService: CertificateIDService) { }
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
  getReqs() {
    this.isLoading = true;
    this.arabicPrint = this.certificateIDService.DownloadCertificate();
    this.EngPrint = this.certificateIDService.DownloadEngCertificate();

    this.certificateIDService.getCertificateID().then(
      (res) => {
        this.certificateDetails = ((res) as any).data;
        this.lectures = (((res) as any).data as any).Lectures;
        this.isLoading = false;
      }
    );
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

}
