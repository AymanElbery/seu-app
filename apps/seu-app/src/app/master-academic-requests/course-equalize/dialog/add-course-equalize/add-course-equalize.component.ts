import { Component, OnInit, Inject } from '@angular/core';
import { CourseEqualMaster } from 'src/app/shared/models/course-equal-master';
import { CourseEqualizerService } from '../../../services/course-equalizer.service';
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

  curseEqual: CourseEqualMaster;
  reqData: CourseEqualMaster;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCourseEqualizeComponent>,
    private toastr: AppToasterService, private acadmicProc: CourseEqualizerService) { }

  ngOnInit() {
    this.curseEqual = {
      courses: [],
      can_add_new_request: false,
      course_list: [],
      messages: [],
      universities: [],
      PREV_UNIV: 0,
      DESC_CRSE_FILE: '', TRANSCRIPT_FILE: '', notes: '',
      hourse_list:[],
      grade_list:[],
      attachment:'',
      year:0,
      university:''

    };
    this.reqData = this.acadmicProc.reqData as CourseEqualMaster;

  }
  changeStatus(it, e) {
    if (e.target.checked) {
      console.log("",it);
      it.CRSE = it.Id;      
      this.curseEqual.courses.push(it);
      ////console.log(this.curseEqual.courses[0]);
    } else {
      for (let i = 0; i < this.curseEqual.courses.length; i++) {
        if (this.curseEqual.courses[i].CRSE == it.CRSE) {
          this.curseEqual.courses.splice(i, 0);
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
    this.curseEqual.attachment = reader.result;
    ////console.log(this.curseEqual.DESC_CRSE_FILE);
  }
  

  requesting = false;
  addRequest(data: any) {
    console.log("Data save",data);
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

    this.requesting = true;
    this.addRequest(this.curseEqual);
  }
  closeDiag() {
    this.dialogRef.close();
  }


}
