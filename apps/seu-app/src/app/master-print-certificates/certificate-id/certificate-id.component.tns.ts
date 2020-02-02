import { Component, OnInit } from '@angular/core';
import {CertificateIDService} from '../services/certificate-id.service';
import { CertificateDetails } from 'src/app/shared/models/certificate-details';
import { Lecture } from 'src/app/shared/models/lecture';
import * as app from 'tns-core-modules/application';
import { HttpClient } from '@angular/common/http';
import * as utils from 'tns-core-modules/utils/utils';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.scss']
})
export class CertificateIDComponent implements OnInit {
  reqData;
  msgs;
  status;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private stdData: CertificateIDService) { }

  certificateDetails: CertificateDetails;


  lectures: any[];
  ngOnInit() {
    this.isLoading = true;
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.arabicPrint = this.stdData.Download();
    this.EngPrint = this.stdData.DownloadEng();
    this.stdData.getRequest().then(
      (res) => {
        this.certificateDetails = ((res) as any).data;
        this.lectures = (((res) as any).data as any).courses;
        this.isLoading = false;
      }
    );
  }
  toHTML(input): any {
    return input.replace('&rarr;', '->');
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  onArabicPrint() {
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrint);
  }
}
