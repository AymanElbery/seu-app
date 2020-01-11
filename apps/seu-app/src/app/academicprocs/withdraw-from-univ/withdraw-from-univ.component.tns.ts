import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { UnivWithdraw } from '../../shared/models/univ-withdraw';
import { AddRequestComponent } from './diag/add-request/add-request.component.tns';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from 'nativescript-toast';

@Component({
  selector: 'app-withdraw-from-univ',
  templateUrl: './withdraw-from-univ.component.tns.html',
  styleUrls: ['./withdraw-from-univ.component.tns.scss']
})
export class WithdrawFromUnivComponent implements OnInit {

  printAR;
  withdraw: UnivWithdraw;
  reqData;
  msgs;
  status;

  isLoading = false;
  deleting = false;
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,private acadmicProc: WithdrawFromUnivService) { }

  ngOnInit() {
    
    this.isLoading = true;
    this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
    this.getRequests();
  }
  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddRequestComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;

      }, err => {
        this.reqData = [];
        this.msgs = [];
        var toast = Toast.makeText("خطأ: حاول مرة أخري");
        toast.show();
        this.isLoading = false;

      }
    );
  }


  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));
  }
  delete(id, index) {
    dialogs.confirm({
      title: "هل انت متأكد؟",
      message: "",
      okButtonText: "OK",
      cancelButtonText: 'Cancel'
  }).then((result:boolean) => {
    if (result) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        var toast = Toast.makeText((res as any).messages[0].body);
        toast.show();
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }, err => {
        var toast = Toast.makeText("خطأ: حاول مرة أخري");
        toast.show();
        this.deleting = false;
      });
    }
      
});

  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }


}
