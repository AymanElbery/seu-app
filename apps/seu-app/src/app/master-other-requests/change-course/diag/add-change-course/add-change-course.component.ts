import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeCourseService } from 'src/app/master-other-requests/services/change-course.service';
import { changeCourse } from 'src/app/shared/models/change-course';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-change-course',
  templateUrl: './add-change-course.component.html',
  styleUrls: ['./add-change-course.component.scss']
})
export class AddChangeCourseComponent implements OnInit {

  printAR;
  course: changeCourse;
  reqData;
  msgs;
  hiddenfield: true;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddChangeCourseComponent>,
    private toastr: AppToasterService, private acadmicProc: ChangeCourseService) { }

  ngOnInit() {
    this.course = { major: '', mobile: '', reason: '', outside: '', bacholar_copy: '', academic_record: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    // this.acadmicProc.getRequests().then(
    //   res => {
    //     this.acadmicProc.reqData = (res as any).data;
    //     this.acadmicProc.msgs = (res as any).messages;
    //     this.reqData = this.acadmicProc.reqData;
    //     this.msgs = this.acadmicProc.msgs;
    //   }
    // );
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.dialogRef.close();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }

  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.course);
    //console.log(this.branch);
  }


  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.course.academic_record = reader.result;

  }

  handleInputChangeCopy(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoadedcopy.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedcopy(e) {
    const reader = e.target;
    this.course.bacholar_copy = reader.result;

  }

  changeOutside(event) {
    this.course.outside = (event.checked) ? '1' : '';
  }

  handleInputChangeOut(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoadedOut.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedOut(e) {
    const reader = e.target;
  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this.dialogRef.close();
  }
}