import { Component, OnInit } from '@angular/core';
import { Lecture } from '../../shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { HttpClient } from '@angular/common/http';
import * as utils from 'tns-core-modules/utils/utils';
import { CertificateDetails } from 'src/app/shared/models/certificate-details';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.tns.html',
  styleUrls: ['./certificate-id.component.tns.scss'],
  moduleId: module.id
})
export class CertificateIDComponent implements OnInit {

  constructor(private certificateIDService: CertificateIDService, private route: HttpClient) { }
  certificateDetails: CertificateDetails;
  arabicPrint: string;
  EngPrint: string;

  lectures: Lecture[];
  isLoading = false;
  ngOnInit() {
    this.isLoading = true;
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
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
