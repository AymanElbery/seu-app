import { Component, OnInit } from '@angular/core';
import { StudyPostponeService } from '../../../services/study-postpone.service';
import { studyPostpone } from '../../../../shared/models/study-postpone';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-study-postpone',
  templateUrl: './add-study-postpone.component.tns.html',
  styleUrls: ['./add-study-postpone.component.tns.scss']
})
export class AddStudyPostponeComponent implements OnInit {
  postpone: studyPostpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  terms:ValueItem<number>[] = [];
  termsDropDown;

  constructor(
    private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: StudyPostponeService) { }

  ngOnInit() {
    this.postpone = { mobile: '', num_terms: '', reason: '' };

    this.reqData = this.acadmicProc.reqData;
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
  getTerm(val: SelectedIndexChangedEventData) {
    const code = this.termsDropDown.getValue(val.newIndex);
    this.postpone.num_terms=code;
  }

}