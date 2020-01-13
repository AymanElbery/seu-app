import { Component, OnInit, Inject } from '@angular/core';
import { Postpone } from 'src/app/shared/models/postpone';
import { TermExecuseService } from '../../../services/term-execuse.service';
import { ModalDialogParams } from 'nativescript-angular/common';
import { AppToasterService } from '../../../../shared/services/app-toaster.tns';

@Component({
  selector: 'app-add-execuse-term',
  templateUrl: './add-execuse-term.component.tns.html',
  styleUrls: ['./add-execuse-term.component.tns.scss']
})
export class AddExecuseTermComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(private _params: ModalDialogParams,private acadmicProc: TermExecuseService,private toastr: AppToasterService) { }

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
