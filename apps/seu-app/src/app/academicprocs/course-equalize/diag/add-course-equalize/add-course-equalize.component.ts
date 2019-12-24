import { Component, OnInit, Inject } from '@angular/core';
import { CourseEqual } from 'src/app/shared/models/course-equal';
import { CourseEqualizerService } from 'src/app/academicprocs/services/course-equalizer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-course-equalize',
  templateUrl: './add-course-equalize.component.html',
  styleUrls: ['./add-course-equalize.component.scss']
})
export class AddCourseEqualizeComponent implements OnInit {

  curseEqual: CourseEqual;
  reqData: CourseEqual;
  msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddCourseEqualizeComponent>,
               private toastr: ToastrService, private acadmicProc: CourseEqualizerService ) { }

  ngOnInit() {
    this.curseEqual = {courses: [],
      can_add_new_request: false,
       course_list: [],
       messages: [],
       univ_list_arr: [],
       PREV_UNIV: 0,
       DESC_CRSE_FILE: '', TRANSCRIPT_FILE: '', notes: ''};
    this.reqData = this.acadmicProc.reqData as CourseEqual ;

  }
  changeStatus(it, e) {
    if (e.target.checked) {
      ////console.log(it);
      it.TRNS_CRSE = it.CRSE_PK;
      this.curseEqual.courses.push(it);
      ////console.log(this.curseEqual.courses[0]);
    } else {
      for (let i = 0 ; i < this.curseEqual.courses.length; i++) {
        if (this.curseEqual.courses[i].TRNS_CRSE == it.TRNS_CRSE) {
          this.curseEqual.courses.splice(i, 1);
        }

      }
    }
    ////console.log(this.curseEqual.courses);

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
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {

this.addRequest(this.curseEqual);
////console.log(this.curseEqual);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }


}
