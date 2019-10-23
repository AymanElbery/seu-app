import { Component, OnInit } from '@angular/core';
import {CertificateIDService} from '../services/certificate-id.service';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.css']
})
export class CertificateIDComponent implements OnInit {
  reqData;
  msgs;
  status;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private stdData: CertificateIDService) { }

  ngOnInit() {
    this.isLoading = true;
    this.stdData.getRequest().then(
      res => {
        console.log(this.reqData);
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        this.msgs = this.stdData.msgs;
        this.isLoading = false;

      }
    );
    this.arabicPrint = this.stdData.Download();
    this.EngPrint = this.stdData.DownloadEng();
  }



}
