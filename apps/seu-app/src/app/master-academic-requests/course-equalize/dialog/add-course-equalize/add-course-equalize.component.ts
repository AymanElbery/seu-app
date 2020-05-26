import { Component, OnInit, Inject } from '@angular/core';
import { CourseEqualMaster } from 'src/app/shared/models/course-equal-master';
import { MasterCourseEqualizerService } from '../../../services/master-course-equalizer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-course-equalize',
  templateUrl: './add-course-equalize.component.html',
  styleUrls: ['./add-course-equalize.component.css']
})
export class AddCourseEqualizeComponent implements OnInit {

  curseEqual;
  reqData: CourseEqualMaster;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCourseEqualizeComponent>,
    private toastr: AppToasterService, private acadmicProc: MasterCourseEqualizerService) { }

  ngOnInit() {
    this.curseEqual = {
      courses: [],
      attachment: '',
      year: '',
      university: ''
    };
    this.reqData = this.acadmicProc.reqData as CourseEqualMaster;
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
    this.curseEqual.attachment = reader.result;
  }


  requesting = false;
  addRequest(data: any) {
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

  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    let formValue = (JSON.parse(JSON.stringify(this.curseEqual)));
    formValue.courses = formValue.courses.map(crseCode => {
      return { CRSE: crseCode };
    });
    this.requesting = true;
    this.addRequest(formValue);
  }

  closeDiag() {
    this.dialogRef.close();
  }


}
