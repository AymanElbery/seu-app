import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../account/services/user.service';
import { DataDownLoadService } from '../../../shared/services/http-downloader.service.tns';
import * as utils from 'tns-core-modules/utils/utils';
import { path ,File} from 'tns-core-modules/file-system';
import * as TextModule from "tns-core-modules/text";
import * as base64 from "base-64";
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import * as fileSystem from 'tns-core-modules/file-system';

declare var java: any;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.tns.html',
  styleUrls: ['./print-report.component.tns.css']
})
export class PrintReportComponent implements OnInit {
  
  subscription: Subscription;
  subscriptiondownlaod: Subscription;
  subscriptiondownlaod_housing: Subscription;
  printreport: any;
  printreportddwonld: any;
  printreportddwonld_house: any;
  subscriptions;
  inputValue: any;
  LoggedINID;
  downloadedFilePath;
  constructor(private user: UserService,private empservice: EmployeesService,
     private translate: TranslateService, private toaster: AppToasterService,
     private http: HttpClient,private downloader: DataDownLoadService) { }
  isLoading = true;
  ngOnInit() {
    if(isAndroid) {
       this.downloadedFilePath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();

    }else if(isIOS){
      this.downloadedFilePath= fileSystem.knownFolders.ios.library().path
    }

    this.LoggedINID = this.user.userData.id;
    this.isLoading = true
    this.getprintreport();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getprintreport();

    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  
  getprintreport() {

    this.isLoading = false
    //   this.subscription = this.empservice.getprintreport("hr_rep488",this.inputValue).subscribe(rpt => {
    //    if (rpt) {       
    //      this.printreport = (rpt as any).data;
    //      ////console.log("emp printreport",this.printreport);      
    //      this.isLoading = false;      
    //    } else {       
    //      //this.messages = [];
    //    }
    //  });

  }

  getprintreportdownlaod(rptname: any, fName = 'PRINT') {

    this.isLoading = true
    this.subscriptiondownlaod = this.empservice.getprintreport(rptname, this.inputValue == null ? "" : this.inputValue).subscribe(prtrpt => {
      if (prtrpt['statusCode'] == 200) {
        const fileName = fName+'.pdf';
     
      const permissions = require('nativescript-permissions');
      if(isAndroid){
        permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, 'I need these permissions').then(
          () => {
              const file: File = File.fromPath(path.join(this.downloadedFilePath,fileName));
              this.convertBase64ToPdf(prtrpt['data'],file);
              utils.openFile(file.path);
            });
      }else{
        const file: File = File.fromPath(path.join(this.downloadedFilePath,fileName));
        this.convertBase64ToPdf(prtrpt['data'],file);
        utils.openFile(file.path);
      }
     
        this.isLoading = false
      } else {
        this.toaster.tryagain();
      }
    });

  }

  getprintreportdownlaod_housing(rptname: any) {

    this.isLoading = true
    this.subscriptiondownlaod_housing = this.empservice.getprintreport_housing(rptname).subscribe(prtrpthouse => {
      if (prtrpthouse) {
        this.printreportddwonld_house = (prtrpthouse as any).data; 
       // let url = this.getApiURI() + "DownloadFileServlet";
        var downloadhousingreportUrl=environment.wafi_apilink.replace('/jersey', '') + '/DownloadFileServlet?empId=' + this.LoggedINID + '&type=housing&name=' + this.printreportddwonld_house
        //var downloadhousingreportUrl=(url +"?empId="+ empId +"&type="+ 'housing' +"&name="+ this.printreportddwonld_house);
        //console.log("url",downloadhoisingreport);
       // window.open(downloadhousingreportUrl, '_blank');
       utils.openUrl(downloadhousingreportUrl);
        this.isLoading = false
      } else {
        this.toaster.tryagain();
      }
    });

  }

  getApiURI() {
    return environment.wafi_apilink;
  }
  GetRequest(path: string) {
    let url = this.getApiURI() + '/' + path;
    return this.http.get(url);
  }
  
  convertBase64ToPdf(encodeBase64:string,file:File){
    const binaryString = base64.decode(encodeBase64);
    
    file.writeTextSync(binaryString, err => {
      console.log("Error saving file");
      console.log(err);
  }, TextModule.encoding.ISO_8859_1);

  }
}
