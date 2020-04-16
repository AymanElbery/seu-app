import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { CancelCourseService } from 'src/app/master-academic-requests/services/cancel-course.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { NgForm } from '@angular/forms';
import { CancelCousreMaster } from 'src/app/shared/models/cancel-cousre-master';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-cancel-course-request',
  templateUrl: './add-cancel-course-request.component.html',
  styleUrls: ['./add-cancel-course-request.component.scss']
})
export class AddCancelCourseRequestComponent implements OnInit {
  cancelCousre: CancelCousreMaster;
  reqData: any;
  msgs: any;
  approve: boolean;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCancelCourseRequestComponent>,
    private toastr: AppToasterService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.cancelCousre = { course_number: 0, agreement: 1 };

    this.reqData = this.acadmicProc.reqData;

    this.approve = false;
    //console.log(this.reqData.notes);
  }

  changeStatus(id) {
    this.cancelCousre.course_number = id;
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
    this.requesting = true;
    this.addRequest(this.cancelCousre);
  }

  closeDiag() {
    this.dialogRef.close();
  }

}
