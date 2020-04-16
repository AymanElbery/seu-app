import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CourseGPAService } from '../../services/course-gpa.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-course-gpa',
  templateUrl: './add-course-gpa.component.html',
  styleUrls: ['./add-course-gpa.component.css']
})
export class AddCourseGpaComponent implements OnInit {

  printAR;
  course: any;
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCourseGpaComponent>,
    private toastr: AppToasterService, private acadmicProc: CourseGPAService) { }

  ngOnInit() {
    this.course = { CI003: 0, CS003: 0 };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
  }


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

  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }

    this.requesting = true;
    this.addRequest(this.course);

  }

  closeDiag() {
    this.dialogRef.close();
  }

}
