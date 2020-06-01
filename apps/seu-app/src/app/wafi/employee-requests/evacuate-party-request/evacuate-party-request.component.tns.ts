import { Component, OnInit, Inject } from '@angular/core';
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


declare const kUTTypePDF;
declare const kUTTypePNG;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let filePath: string = null;


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
    file: '',  notes: ''};


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
              private router: Router) {

  }

  get fileName() {
    return filePath != null ? File.fromPath(filePath).name : 'Browse';
  }
  changeYear(e) {
    this.dataObject.disclaimerReason = this.disclaimerReasonItemsDropDown.getValue(e.newIndex);
  }
  onFormSubmit(data) {
    this.dataObject.file = this.convertToBase64(filePath);

    const submitdatavalue = this.dataObject;


    // console.log("submit data", submitdatavalue);
    this.submitted = true;

    this.empreqservice.submitreqserviceleavededuction(submitdatavalue).subscribe(leavdedcut => {
     console.log('saved data', leavdedcut);

     console.log((leavdedcut as any).data);
     if (!((leavdedcut as any).data)) {
      const error = 'خطأ ارسال البيانات ';

      this.toastr.push([{ type: 'error', body: error }]);

     }

     if (!(leavdedcut as any).data.saveRequest) {
        const error = (leavdedcut as any).data.errorMassege;
        // console.log("response data",error);
        this.toastr.push([{ type: 'error', body: error }]);
        this.submitted = false;

      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('wafi.request_saved') }]);
        this.router.navigate(['/wafi/employee-requests']);
      }
    }
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
    this.router.navigate(['/requests/add-new-request']);
  }

  public openCustomFilesPicker(type: string) {
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
                  filePath = result.file;
                  console.log('filepath:');
                  console.log(result.file);
                  filePath = filePath.replace('file:///', '');
                  console.log('fpath', filePath);
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
    let base64String: string;
    let file: File;
    if (f != null) {
      console.log('ggfile1');
      file = File.fromPath(f);
      console.log('ggfile3');
    } else {
      return;
    }
    console.log('ggfile5');
    const data = file.readSync();
    console.log('ggfile6');

    if (app.ios) {
      base64String = data.base64EncodedStringWithOptions(0);
      console.log('ggfile7');
    } else {
      base64String = android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    return base64String;
  }


}

