import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeCourseService } from '../../../../master-other-requests/services/change-course.service';
import { changeCourse } from '../../../../shared/models/change-course';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-change-course',
  templateUrl: './add-change-course.component.html',
  styleUrls: ['./add-change-course.component.scss']
})
export class AddChangeCourseComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _params: ModalDialogParams,
              private toastr: AppToasterService, private acadmicProc: ChangeCourseService) { }

  printAR;
  course: changeCourse;
  reqData;
  msgs;
  hiddenfield: true;
  majors: ValueItem<number>[] = [];
  majorsDropDown;
  requesting = false;


  ngOnInit() {
    this.course = { major: '', mobile: '', reason: '', outside: '', bacholar_copy: '', academic_record: '' };
    this.reqData = this.acadmicProc.reqData;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
  
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.reqData.majors.length; i++) {
      this.majors.push(
        {
          value: this.reqData.majors[i].MAJOR_PK,
          display: this.reqData.majors[i].MAJOR_TITLE
        }
      );
    }
    this.majorsDropDown = new ValueList(this.majors);

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
    this.requesting = true;
    this.addRequest(this.course);
  }

  print(req) {
    // return this.acadmicProc.(req);

  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this._params.closeCallback();
  }
  getmajor(val: SelectedIndexChangedEventData) {
    const code = this.majorsDropDown.getValue(val.newIndex);
    this.course.major = code;
  }
}
