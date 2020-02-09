import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { termExecuse } from '../../../../shared/models/term-execue';
import { TermExecuseService } from '../../../services/term-execuse.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-term-execuse',
  templateUrl: './add-term-execuse.component.tns.html',
  styleUrls: ['./add-term-execuse.component.tns.scss']
})
export class AddTermExecuseComponent implements OnInit {

  termExecuse: termExecuse;
  reqData= {
    "terms":[{"id":-1,"value":""}]
  };
  msgs: any;
  terms:ValueItem<number>[] = [];
  termsDropDown;

  constructor( private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: TermExecuseService) { }

  ngOnInit() {
    this.termExecuse = { reason: '', mobile: '', num_terms: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

    for (let i = 0; i < this.reqData.terms.length; i++) {
        this.terms.push(
          {
            value: this.reqData.terms[i].id,
            display: this.reqData.terms[i].value
          }
        );
      }
      this.termsDropDown = new ValueList(this.terms);

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
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.termExecuse);
  }

  closeDiag() {
    this._params.closeCallback();
  }
  getTerm(val: SelectedIndexChangedEventData) {
    const code = this.termsDropDown.getValue(val.newIndex);
    this.termExecuse.num_terms=code;
  }

}
