import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from 'src/app/academicprocs/services/withdraw-from-univ.service';
import { NgForm } from '@angular/forms';
import { CancelCourseService } from 'src/app/academicprocs/services/cancel-course.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-course-cancel',
  templateUrl: './add-course-cancel.component.html',
  styleUrls: ['./add-course-cancel.component.css']
})
export class AddCourseCancelComponent implements OnInit {

  cancelCousre: CancelCousre;
  reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCourseCancelComponent>,
    private toastr: AppToasterService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.cancelCousre = { courses: [], agreement: 1 };
    this.reqData = this.acadmicProc.reqData;
  }
  changeStatus(id, e, i) {
    if (e.target.checked) {
      const selCouse = { value: id };
      this.cancelCousre.courses.push(selCouse);
    } else {
      const index = this.cancelCousre.courses.findIndex(e => { return e.value == id });
      if (index != -1)
        this.cancelCousre.courses.splice(index, 1);
    }
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
