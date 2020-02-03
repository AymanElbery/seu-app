import { Component, OnInit} from '@angular/core';
import { UniversityWithdrawalService } from '../../../services/university-withdrawal.service';
import { masterWithdrawal } from '../../../../shared/models/master-withdrawal';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: 'app-add-withdrawal-request',
  templateUrl: './add-withdrawal-request.component.tns.html',
  styleUrls: ['./add-withdrawal-request.component.tns.scss']
})
export class AddWithdrawalRequestComponent implements OnInit {

  withdrawalReq: masterWithdrawal;
  reqData: any;
  msgs: any;

  constructor(private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: UniversityWithdrawalService) { }

  ngOnInit() {
    this.withdrawalReq = { email: '', mobile: '' };
    this.reqData = this.acadmicProc.reqData;

  }

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
  requesting = false;
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.withdrawalReq);
  }
  closeDiag() {
    this._params.closeCallback();

  }

}
