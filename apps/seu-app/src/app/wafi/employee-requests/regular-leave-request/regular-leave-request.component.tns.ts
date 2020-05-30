import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster.tns';
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
  selector: 'app-regular-leave-request',
  templateUrl: './regular-leave-request.component.html',
  styleUrls: ['./regular-leave-request.component.css']
})
export class RegularLeaveRequestComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService,
              private translate: TranslateService,
              private router: Router) {



  }

get fileName() {
  return filePath != null ? File.fromPath(filePath).name : 'Browse';
}
  submitted = false;
  vacationreqtype: any;
  fileToUpload: File = null;
  ddlday;
  ddlmonth;
  ddlyear;
  days: ValueItem<any>[] = [];
  daysDropDown;
  monthes: ValueItem<any>[] = [];
  monthesDropDown;
  yearsDropDown;
  years: ValueItem<number>[] = [];


  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;
  vacationsbal;
  isLoading = true;
  subscriptions;
  id: number;
  private sub: any;
  dataObject = { beginYear: 0, beginMonth: 0,
    beginDay: 0, leaveDeductionPeriod: 0,
    file: '',  notes: ''};
d;




  onFormSubmit(data) {
    this.submitted = true;
    console.log('file', filePath);
    this.dataObject.file = this.convertToBase64(filePath);
  
    console.log('submit data', this.dataObject);

    this.empreqservice.submitreqserviceleavededuction(this.dataObject).subscribe(leavdedcut => {
      //// console.log("saved data", leavdedcut);

     console.log('datadata');
     console.log(leavdedcut);
     alert(leavdedcut);
     if ((!leavdedcut as any).data.saveRequest) {
        const error = (leavdedcut as any).data.errorMassege;
        this.toastr.push([{ type: 'error', body: error }]);

      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('wafi.request_saved') }]);
        this.back();
      }
    }
    );

    // this.formSubmitted = true;

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.FillDDLReqType(this.id);
    });
    // this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
    // this.AddReqForm.controls.requestType.setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {


      if (reqtype) {

        this.ddlday = (reqtype as any).data.dayItem;
        this.ddlmonth = (reqtype as any).data.monthItem;
        this.ddlyear = (reqtype as any).data.yearItem;



        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ddlday.length; i++) {
          this.days.push(
            {
              value: this.ddlday[i].value,
              display: this.ddlday[i].label
            }
          );
        }
        this.daysDropDown = new ValueList(this.days);

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ddlmonth.length; i++) {
          this.monthes.push(
            {
              value: this.ddlmonth[i].value,
              display: this.ddlmonth[i].label
            }
          );
        }
        this.monthesDropDown = new ValueList(this.monthes);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ddlyear.length; i++) {
          this.years.push(
            {
              value: this.ddlyear[i].value,
              display: this.ddlyear[i].label
            }
          );
        }
        this.yearsDropDown = new ValueList(this.years);



        //// console.log("vac item data", this.vacationreqtype);
        this.isLoading = false;
      } else {
      }
    });
  }



  changeYear(e) {
    this.dataObject.beginYear = this.yearsDropDown.getValue(e.newIndex);
  }
  changeMonth(e) {
    this.dataObject.beginMonth = this.monthesDropDown.getValue(e.newIndex);
  }
  changeDay(e) {
    this.dataObject.beginDay = this.daysDropDown.getValue(e.newIndex);
  }


  back() {
    this.router.navigate(['requests/add-new-request']);
  }

  public openCustomFilesPicker(type: string) {
    console.log('f1');
    let extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF, kUTTypePNG];
        console.log('f11');
    } else {
        extensions = ['pdf', 'png', 'jpeg'];
        console.log('f10');
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
