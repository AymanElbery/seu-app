import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from 'src/app/academicprocs/services/withdraw-from-univ.service';
import { NgForm } from '@angular/forms';
import { CancelCourseService } from 'src/app/academicprocs/services/cancel-course.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';

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

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddCourseCancelComponent>,
               private toastr: ToastrService, private acadmicProc: CancelCourseService ) { }

  ngOnInit() {
    this.cancelCousre = {courses: [], agreement: 1};

    this.reqData = this.acadmicProc.reqData;

  }
  changeStatus(id, e, i) {
    if (e.target.checked) {
      const selCouse = {value: id};
      this.cancelCousre.courses.push(selCouse);
      console.log(this.cancelCousre.courses);
    } else {
      this.cancelCousre.courses.splice(i, 1);
    }
  }

  addRequest(data: any) {
    console.log(data);
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {
this.addRequest(this.cancelCousre);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
