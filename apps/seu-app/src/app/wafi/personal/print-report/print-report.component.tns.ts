import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../shared/services/app-toaster';
import * as fileSaver from 'file-saver';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../account/services/user.service';
import { DataDownLoadService } from '../../../shared/services/http-downloader.service.tns';
import * as fileSystem from 'tns-core-modules/file-system';
import * as utils from 'tns-core-modules/utils/utils';
import { knownFolders, Folder, path ,File} from 'tns-core-modules/file-system';

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
  constructor(private user: UserService,private empservice: EmployeesService,
     private translate: TranslateService, private toaster: AppToasterService,
     private http: HttpClient,private downloader: DataDownLoadService) { }
  isLoading = true;
  ngOnInit() {
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
      //  const fileName = fName + '.pdf';
        //const pdfcont = atob(prtrpt['data']);
       // var blob = new Blob([pdfcont], { type: "application/pdf" });
     //  const  downloadedFilePath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();
     const documentsFolder: Folder = <Folder>knownFolders.documents();
     const filePath: string = path.join(documentsFolder.path, "myfile.pdf");
     const file: File = File.fromPath(filePath);
      const base64Decoded = new java.lang.String(android.util.Base64.decode(prtrpt['data'], android.util.Base64.DEFAULT));
     
            file.writeSync(prtrpt['data']);
         /*   .then((result) => {
                file.readText().then((res) => {
                    console.log(`File content:  ${res}`);
                });

            }).catch((err) => {
                console.log("errrrrrrrr",err.stack);
            });*/
            
            utils.openFile(file.path);


        this.isLoading = false
      } else {
        this.toaster.tryagain();

        //this.messages = [];
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
        window.open(downloadhousingreportUrl, '_blank');
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
  
  onArabicPrint() {
   /* this.downloader.downloadFile(this.arabicPrint);
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      console.log(x);
      this.printAR = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.transalte.get('general.ar_print').subscribe(res => {
            this.printAR = res;
          }
          );

      }
    });*/
  }
  /*convertToBase64(filePath: string) {
    let base64String: string;
    let file: File;
    if (filePath != null) {
     //file = File.fromPath(filePath);
    } else {
      return;
    }
    let data = file.readSync();

    if (app.ios) {
      base64String = data.base64EncodedStringWithOptions(0);
    } else {
      base64String = android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    return base64String;
  }*/
}
