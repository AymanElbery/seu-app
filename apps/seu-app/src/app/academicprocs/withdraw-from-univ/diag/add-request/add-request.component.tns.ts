import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from '../../../../../app/shared/models/univ-withdraw';
import { WithdrawFromUnivService } from '../../../../academicprocs/services/withdraw-from-univ.service';
import { ValueList } from 'nativescript-drop-down';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { AppToasterService } from '../../../../shared/services/app-toaster';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.tns.html',
  styleUrls: ['./add-request.component.tns.scss']
})
export class AddRequestComponent implements OnInit {
  withdraw: UnivWithdraw;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  requesting = false;
  branches=[]
  dropDownBranches;
  selectedIndex;
  constructor(
    private acadmicProc: WithdrawFromUnivService,private _params: ModalDialogParams,private toastr: AppToasterService) { }
    

  ngOnInit() {
    this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
    this.reqData = this.acadmicProc.reqData;
    for(let i=0;i<this.reqData.branches.length;i++){
      this.branches.push(
        {
          value:this.reqData.branches[i].id,
          display:this.reqData.branches[i].name
        }
      );
    }
    this.dropDownBranches=new ValueList(this.branches);

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
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest({
      "branch":this.dropDownBranches.getValue(this.selectedIndex),
      "mobile":this.withdraw.mobile,
      "email":this.withdraw.email
    });
  }
  closeDiag() {
    this._params.closeCallback();
  }

}

