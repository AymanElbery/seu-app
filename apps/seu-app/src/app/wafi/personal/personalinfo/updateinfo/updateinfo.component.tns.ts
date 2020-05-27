import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from '../../../../wafi/services/employees.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.tns.html',
  styleUrls: ['./updateinfo.component.tns.css']
})
export class UpdateinfoComponent implements OnInit {
  updatedForm: any={};
  submitted = false;
  langsList = [];
  langs:ValueItem<number>[] = [];
  langsDropDown;
  preferred_lang_sms_index: any;
  constructor(
    private _params: ModalDialogParams,
    private route: ActivatedRoute, private toastr: AppToasterService,private http: HttpClient, private empservice: EmployeesService, private translate: TranslateService, private router: Router) {
    this.langsList = this._params.context['updateinfo']['langList'];
  }
  subscriptions;
  ngOnInit() {
    this.updatedForm.email=this._params.context.updateinfo[12]["data"];
    this.updatedForm.mobile_no=this._params.context.updateinfo[13]["data"];
    this.updatedForm.phone_no=this._params.context.updateinfo[14]["data"];
    this.updatedForm.address=this._params.context.updateinfo[15]["data"];
    this.updatedForm.address_s=this._params.context.updateinfo[16]["data"];
    this.updatedForm.preferred_lang_sms=this._params.context.updateinfo[17]["data"];

    this.subscriptions = this.translate.onLangChange.subscribe(() => {
    });
    for (let i = 0; i < this.langsList.length; i++) {
      if(this.updatedForm.preferred_lang_sms==this.langsList[i].label){
        this.preferred_lang_sms_index=i;
      }
      this.langs.push(
        {
          value: this.langsList[i].value,
          display: this.langsList[i].label
        }
      );
    }
    this.langsDropDown = new ValueList(this.langs);

  }
  

  onFormSubmit() {
    
    this.submitted = true;
    this.empservice.updateEmpInfo(this.updatedForm).subscribe(updateinfo => {
      // console.log("response",updateinfo);
      if (updateinfo['statusDesc'] == "success") {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.updatedsuccess') }]);
        this.submitted = false;
        this._params.closeCallback();
      } else {
        var erromsg = updateinfo['data']['errmsg'];
        this.toastr.push([{ type: 'error', 'body': erromsg }]);
      }
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
    }
    );

  }
  
  closeDiag() {
    this._params.closeCallback();
  }
  getLang(val: SelectedIndexChangedEventData) {
    const code = this.langsDropDown.getValue(val.newIndex);
    this.updatedForm.preferred_lang_sms=code;
  }

  onLoadedDropDown(dropdown){
    
    dropdown.selectedIndex=this.preferred_lang_sms_index;
  }
}
