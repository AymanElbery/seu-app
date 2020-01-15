import { Component, OnInit} from '@angular/core';
import { CourseEqual } from '../../../../shared/models/course-equal';
import { CourseEqualizerService } from '../../../services/course-equalizer.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../../../shared/services/app-toaster.tns';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'app-add-course-equalize',
  templateUrl: './add-course-equalize.component.tns.html',
  styleUrls: ['./add-course-equalize.component.tns.scss']
})
export class AddCourseEqualizeComponent implements OnInit {

  curseEqual: CourseEqual;
  reqData: CourseEqual;
  msgs: any;
  private imageSrc = '';
  univs:ValueItem<number>[] = [];
  univsDropDown;

  constructor(
    private toastr: AppToasterService, private acadmicProc: CourseEqualizerService) { }

  ngOnInit() {
    this.curseEqual = {
      courses: [],
      can_add_new_request: false,
      course_list: [],
      messages: [],
      univ_list_arr: [],
      PREV_UNIV: 0,
      DESC_CRSE_FILE: '', TRANSCRIPT_FILE: '', notes: ''
    };
    this.reqData = this.acadmicProc.reqData as CourseEqual;
    for (let i = 0; i < this.curseEqual.univ_list_arr.length; i++) {
      this.univs.push(
        {
          value: this.curseEqual.univ_list_arr[i].UN_ID,
          display: this.curseEqual.univ_list_arr[i].UN_NAME
        }
      );
    }
    this.univsDropDown = new ValueList(this.univs);

  }
  changeStatus(it, e) {
    if (e.target.checked) {
      ////console.log(it);
      it.TRNS_CRSE = it.CRSE_PK;
      this.curseEqual.courses.push(it);
      ////console.log(this.curseEqual.courses[0]);
    } else {
      for (let i = 0; i < this.curseEqual.courses.length; i++) {
        if (this.curseEqual.courses[i].TRNS_CRSE == it.TRNS_CRSE) {
          this.curseEqual.courses.splice(i, 1);
        }

      }
    }
    //console.log(this.curseEqual.courses);

  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.curseEqual.DESC_CRSE_FILE = reader.result;
    ////console.log(this.curseEqual.DESC_CRSE_FILE);
  }
  handleInputChange2(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded2.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded2(e) {

    const reader = e.target;
    this.curseEqual.TRANSCRIPT_FILE = reader.result;

    ////console.log(this.curseEqual.TRANSCRIPT_FILE);
  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
       // this.dialogRef.close();
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
    this.addRequest(this.curseEqual);
  }
  closeDiag() {
   // this.dialogRef.close();
  }
  getUniv(val: SelectedIndexChangedEventData) {
    const code = this.univsDropDown.getValue(val.newIndex);
    this.curseEqual.PREV_UNIV=code;
  }
}
