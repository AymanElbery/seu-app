import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { AdministrativeService } from '../../services/administrative.service';
import * as utils from 'tns-core-modules/utils/utils';
import { path ,File} from 'tns-core-modules/file-system';
import * as TextModule from "tns-core-modules/text";
import * as base64 from "base-64";
import { isAndroid } from 'tns-core-modules/platform';
import * as fileSystem from 'tns-core-modules/file-system';

declare var android: any;

@Component({
  selector: 'app-penalty-discount',
  templateUrl: './penalty-discount.component.tns.html',
  styleUrls: ['./penalty-discount.component.tns.css']
})
export class PenaltyDiscountComponent implements OnInit {
  p: number;
  filter;
  searchTerm: string;
  config: any;
  getepanaltydata;
  subscription: Subscription;
  messages;
  printdata;
  downloadedFilePath;
  clicked: any;

  constructor(private http: HttpClient, private adminservice: AdministrativeService, private translate: TranslateService) { }
  isLoading = true;
  subscriptions;
  ngOnInit() {
    if (isAndroid) {
      this.downloadedFilePath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();

   }else{
     this.downloadedFilePath= fileSystem.knownFolders.ios.library().path
   }
    this.loadpanaltydata();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.loadpanaltydata();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  loadpanaltydata() {

    this.isLoading = true
    this.subscription = this.adminservice.getpanaltydiscount().subscribe(getpandisc => {
      //console.log("emp info",getpandisc)
      if (getpandisc) {
        this.getepanaltydata = (getpandisc as any).data["managerialDuties"];
        this.isLoading = false;
      } else {
        this.messages = [];
      }
    });
  }

  printreport(decisionNo, decisionDate, absentDate) {
    this.subscription = this.adminservice.getpandiscreport(decisionNo, decisionDate, absentDate).subscribe(getreport => {
      console.log("emp info",getreport)
      if (getreport) {
        this.printdata = getreport['data'];
        const fileName = "panalty_discount" + '_' + new Date().getTime() + '.pdf';
        const permissions = require('nativescript-permissions');
        if(isAndroid){
        permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, 'I need these permissions').then(
            () => {
                const file: File = File.fromPath(path.join(this.downloadedFilePath,fileName));
                this.convertBase64ToPdf(this.printdata,file);
                utils.openFile(file.path);
              });
            }else{
              const file: File = File.fromPath(path.join(this.downloadedFilePath,fileName));
              this.convertBase64ToPdf(this.printdata,file);
              utils.openFile(file.path);
            }
      } else {
        this.messages = [];
      }
    });
  }
  convertBase64ToPdf(encodeBase64:string,file:File){
    const binaryString = base64.decode(encodeBase64);
    
    file.writeTextSync(binaryString, err => {
      console.log("Error saving file");
      console.log(err);
  }, TextModule.encoding.ISO_8859_1);

  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }
}
