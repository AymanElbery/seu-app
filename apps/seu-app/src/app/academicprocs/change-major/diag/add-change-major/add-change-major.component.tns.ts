import { Component, OnInit, Inject } from '@angular/core';
import { ChangeMajorService } from '../../../services/change-major.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-change-major',
  templateUrl: './add-change-major.component.tns.html',
  styleUrls: ['./add-change-major.component.tns.scss']
})
export class AddChangeMajorComponent implements OnInit {

  printAR;
  mj: { major };
  reqData;
  msgs;
  majors:ValueItem<number>[] = [];
  majorsDropDown;

  constructor(private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: ChangeMajorService) { }

  ngOnInit() {
    this.mj = { major: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    for (let i = 0; i < this.reqData.majors.length; i++) {
      this.majors.push(
        {
          value: this.reqData.majors[i].MAJOR_PK,
          display: this.reqData.majors[i].MAJOR_TITLE
        }
      );
    }
    this.majorsDropDown = new ValueList(this.majors);

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.closeDiag();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.mj);
  }

  print(req) {
    return this.acadmicProc.Download(req);

  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this._params.closeCallback();
  }
  getmajor(val: SelectedIndexChangedEventData) {
    const code = this.majorsDropDown.getValue(val.newIndex);
    this.mj.major=code;
  }
}

