import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequest } from 'src/app/shared/models/change-request';
import { ChangeRequestService } from '../../../services/change-request.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueList, ValueItem, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-request-change',
  templateUrl: './add-request-change.component.tns.html',
  styleUrls: ['./add-request-change.component.tns.scss']
})
export class AddRequestChangeComponent implements OnInit {

  //changeRequest: ChangeRequest;

  camps: any;
  cmp: { camp };
  msgs: any;
  private imageSrc = '';
  branchesDropDown;
  branches:ValueItem<number>[] = [];
  
  constructor(private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: ChangeRequestService) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    this.cmp = { camp: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.camps = this.acadmicProc.reqData.camps;
        this.msgs = this.acadmicProc.msgs;
        for (let i = 0; i < this.camps.length; i++) {
          this.branches.push(
            {
              value: this.camps[i].CAMP_CODE,
              display: this.camps[i].CAMP_DESC
            }
          );
        }
        this.branchesDropDown = new ValueList(this.branches);
      }
    );

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

    if (this.cmp.camp == "")
      return false;
    this.requesting = true;
    this.addRequest(this.cmp);
  }

  closeDiag() {
    this._params.closeCallback();
  }
  getBranch(val: SelectedIndexChangedEventData) {
    const code = this.branchesDropDown.getValue(val.newIndex);
    this.cmp.camp=code;
  }
}
