import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ChineesCourseService } from '../../services/chineescourse.service';

@Component({
  selector: 'app-add-chineescourse',
  templateUrl: './add-chineescourse.component.html',
  styleUrls: ['./add-chineescourse.component.scss']
})
export class AddChineescourseComponent implements OnInit {

  printAR;
  course: any;
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddChineescourseComponent>,
    private toastr: AppToasterService, private acadmicProc: ChineesCourseService) { }

  ngOnInit() {
    this.course = { course_time: '' };
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
