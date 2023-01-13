import { Component, OnInit, Inject } from '@angular/core';
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

  // tslint:disable-next-line: variable-name
  constructor(private _params: ModalDialogParams,
              private toastr: AppToasterService, private acadmicProc: ChangeRequestService) { }

  // changeRequest: ChangeRequest;

  camps: [any];
  cmp: { camp };
  msgs: any;
  private imageSrc = '';
  branchesDropDown;
  branches: ValueItem<number>[] = [];

  requesting = false;

  ngOnInit() {
    // this.changeRequest = {camp: []};
    this.cmp = { camp: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.camps = this.acadmicProc.reqData.camps;
        this.msgs = this.acadmicProc.msgs;
        // tslint:disable-next-line: prefer-for-of
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
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if ((res as any).status) {
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

    // tslint:disable-next-line: triple-equals
    if (this.cmp.camp == '') {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.cmp);
  }

  closeDiag() {
    this._params.closeCallback();
  }
  getBranch(val: SelectedIndexChangedEventData) {
    const code = this.branchesDropDown.getValue(val.newIndex);
    this.cmp.camp = code;
  }
}
