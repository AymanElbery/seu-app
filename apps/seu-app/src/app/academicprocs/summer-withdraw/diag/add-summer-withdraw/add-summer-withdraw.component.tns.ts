import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Postpone } from 'src/app/shared/models/postpone';
import { SummerWithdrawService } from '../../../services/summer-withdraw.service';
import { ModalDialogParams } from 'nativescript-angular/common';
import { AppToasterService } from '../../../../shared/services/app-toaster';

@Component({
  selector: 'app-add-summer-withdraw',
  templateUrl: './add-summer-withdraw.component.tns.html',
  styleUrls: ['./add-summer-withdraw.component.tns.scss']
})
export class AddSummerWithdrawComponent implements OnInit {


  postpone: Postpone;
  reqData: any;
  msgs: any;

  constructor(private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: SummerWithdrawService) { }

  ngOnInit() {
    this.postpone = { reason: '' };
    this.reqData = this.acadmicProc.reqData;

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
    this.addRequest(this.postpone);
  }


  closeDiag() {
    this._params.closeCallback();
  }

}
