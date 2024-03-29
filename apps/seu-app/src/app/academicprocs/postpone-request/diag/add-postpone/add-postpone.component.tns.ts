import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TermPostponeService } from '../../../services/term-postpone.service';
import { Postpone } from 'src/app/shared/models/postpone';
import { ModalDialogParams } from 'nativescript-angular/common';
import { AppToasterService } from '../../../../shared/services/app-toaster';

@Component({
  selector: 'app-add-postpone',
  templateUrl: './add-postpone.component.tns.html',
  styleUrls: ['./add-postpone.component.tns.scss']
})
export class AddPostponeComponent implements OnInit {

  postpone: Postpone;
 // reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(private _params: ModalDialogParams,
     private acadmicProc: TermPostponeService,
     private toastr: AppToasterService) { }

  ngOnInit() {
    this.postpone = { reason: '' };
    //this.reqData = this.acadmicProc.reqData;

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
