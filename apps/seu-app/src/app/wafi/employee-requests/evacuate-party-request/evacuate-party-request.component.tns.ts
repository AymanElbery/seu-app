import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { ValueItem, ValueList } from 'nativescript-drop-down';
import { File } from 'tns-core-modules/file-system';
import { FilePickerOptions } from 'nativescript-mediafilepicker/mediafilepicker.common';
import { Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { RouterExtensions } from 'nativescript-angular/router';
import { ios } from 'tns-core-modules/application';


declare const kUTTypePDF;
declare const kUTTypePNG;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let filePath2: string = null;


@Component({
  selector: 'app-evacuate-party-request',
  templateUrl: './evacuate-party-request.component.html',
  styleUrls: ['./evacuate-party-request.component.css']
})
export class EvacuatePartyRequestComponent implements OnInit {
  submitted = false;
  vacationreqtype: any;
  fileToUpload: File = null;
  disclaimerReasonItems;
  disclaimerReasons: ValueItem<any>[] = [];
  disclaimerReasonItemsDropDown;
  dataObject = {  disclaimerReason: '',
      notes: '', requestType: 0};
  datafile = '';


  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;
  vacationsbal;
  isLoading = true;
  subscriptions;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService,
              private translate: TranslateService,
              private router: Router, private routerExtensions: RouterExtensions,
              private ref: ChangeDetectorRef) {

  }


  changedisclaimerReason(e) {
    this.dataObject.disclaimerReason = this.disclaimerReasonItemsDropDown.getValue(e.newIndex);
  }



 getExt(filename) {
    const ext = filename.split('.').pop();
    if (ext == filename) { return 'png'; }
    return ext;
}

get fileName() {
  return filePath2 != null ? File.fromPath(filePath2).name : 'Browse';
}

   onFormSubmit(data) {
    let ftype = 'data:image/png;base64,';

 //   this.ref.detectChanges();
   // alert(filePath2);
    console.log('1');
    if (filePath2 != null  ) {


      const exts = this.getExt(filePath2);
      if (exts == 'pdf' || exts == 'PDF') {
        ftype = 'data:application/pdf;base64,';
      }
    // tslint:disable-next-line: max-line-length
      try {
    this.datafile =   ftype +  this.convertToBase64(filePath2) ;
    console.log(this.datafile.length);
    } catch (e) {
      alert(e);
    }
   // alert('12');


    }
    // this.convertToBase64(filePath);
    this.dataObject.requestType = this.id;
    const submitdatavalue = this.dataObject;

    // console.log("submit data", submitdatavalue);
    this.submitted = true;
    console.log('13');

     this.empreqservice.submitreqserviceleavedeductionmobile(this.datafile, submitdatavalue).toPromise().then(leavdedcut => {
     console.log('saved data', leavdedcut);
     // // alert('14');
     this.datafile = '';
     filePath2 = null;
     console.log((leavdedcut as any).data);
     if (!((leavdedcut as any).data)) {
      const error = '  حدث خطأ اثناء عملية التسجيل الرجاء ادخال البيانات بطريقة صحيحه ';
      this.toastr.push([{ type: 'error', body: error }]);
     }

     if (!(leavdedcut as any).data.saveRequest) {
        const error = (leavdedcut as any).data.errorMassege;
        // console.log("response data",error);
        this.toastr.push([{ type: 'error', body: error }]);
        this.submitted = false;
        this.back();
      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('wafi.request_saved') }]);
        // this.router.navigate(['/wafi/employee-requests']);
      }
    },

    (e) => {console.log(e);        this.toastr.push([{ type: 'error', body: e }]);
  }
    // tslint:disable-next-line: align
    );

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(this.id);
      this.FillDDLReqType(this.id);
    });
    // this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
    console.log('hellosss');
  //  this.AddReqForm.controls.requestType.setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {

        console.log(reqtype);
        this.disclaimerReasonItems = (reqtype as any).data.disclaimerReasonItems;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.disclaimerReasonItems.length; i++) {
          this.disclaimerReasons.push(
            {
              value: this.disclaimerReasonItems[i].value,
              display: this.disclaimerReasonItems[i].label
            }
          );
        }
        this.disclaimerReasonItemsDropDown = new ValueList(this.disclaimerReasons);

        // console.log("vac item data", this.vacationreqtype);
        this.isLoading = false;
      } else {
      }
    });
  }

  back() {
  //  alert(filePath2);
   // this.convertToBase64(filePath2) ;

    filePath2 = null;

    this.router.navigate(['/land']);
  }

  public openCustomFilesPicker(type: string) {
    filePath2 = null;
    console.log('f1');
    let extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF, kUTTypePNG];
        console.log('f1');
    } else {
        extensions = ['pdf', 'png', 'jpeg'];
        console.log('f2');
    }

    const options: FilePickerOptions = {
        android: {
            extensions,
            maxNumberFiles: 1


        },
        ios: {
            extensions,
            multipleSelection: false,
          //  hostView: this._hostView
        }
    };

    const mediafilepicker = new Mediafilepicker();
    mediafilepicker.openFilePicker(options);
    console.log('f1111');
    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('getFiles', function(res) {

        const results = res.object.get('results');
        console.log('f2');
        console.log(results);
        if (results) {

            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < results.length; i++) {// only upload one file
              console.log('f1f' + i);
              const result = results[i];
              if (type === 'file') {
                  filePath2 = result.file;
                  console.log('filepath:');
                  console.log(result.file);
                  if (app.ios) {
                  filePath2 = filePath2.replace('file:///', '');
                  }
                  console.log('fpath', filePath2);

             }
            }
        }
  });

    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('error', function(res) {
      const msg = res.object.get('msg');
      console.log(msg);
  });
    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('cancel', function(res) {
      const msg = res.object.get('msg');
      console.log(msg);
  });

}
   convertToBase64(f: string) {
    console.log('ggfile');
    console.log(f);
   // alert(f);
    let base64String: string;
    let file: File;
    if (f != null) {
      console.log('1');
      file =  File.fromPath(f);
      console.log('2');
    } else {
      return;
    }
    // alert('ggfile7');

    const data =  file.readSync();
    // alert('ggfile6');

    if (app.ios) {
      base64String =  data.base64EncodedStringWithOptions(0);
      // alert('ggfile7');
    } else {
      base64String =  android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    console.log('2');
    return base64String;
  }

}

