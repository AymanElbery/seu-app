import { Component, OnInit } from '@angular/core';
import { Lecture } from 'src/app/shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.css']
})
export class CertificateIDComponent implements OnInit {

  constructor(private certificateIDService: CertificateIDService) { }
  certificateDetails;
  arabicPrint: string;
  EngPrint: string;

  lectures: Lecture[];
  isLoading = false;
  ngOnInit() {
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
