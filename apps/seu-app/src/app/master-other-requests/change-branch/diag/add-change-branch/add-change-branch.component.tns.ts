import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ChangeBranchService } from '../../../../master-other-requests/services/change-branch.service';
import { changeBranch } from '../../../../shared/models/change-branch';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
@Component({
  selector: 'app-add-change-branch',
  templateUrl: './add-change-branch.component.tns.html',
  styleUrls: ['./add-change-branch.component.tns.scss']
})
export class AddChangeBranchComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _params: ModalDialogParams,
              private toastr: AppToasterService, private acadmicProc: ChangeBranchService) { }

  // changeRequest: ChangeRequest;

  camps= [{"key":-1,"value":""}];
  cmp: changeBranch;
  msgs: any;
  private imageSrc = '';
  branchesDropDown;
  branches: ValueItem<number>[] = [];

  requesting = false;

  ngOnInit() {
    // this.changeRequest = {camp: []};
    this.cmp = { camp: '', reason: '', mobile: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.camps = this.acadmicProc.reqData.camps;
        this.msgs = this.acadmicProc.msgs;
        console.log(this.acadmicProc.reqData);
        console.log('BRANCHES:' + this.branches);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.camps.length; i++) {
          this.branches.push(
            {
              value: this.camps[i].key,
              display: this.camps[i].value
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
