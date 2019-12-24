import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { CancelCourseService } from 'src/app/master-academic-requests/services/cancel-course.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { NgForm } from '@angular/forms';
import { CancelCousreMaster } from 'src/app/shared/models/cancel-cousre-master';

@Component({
  selector: 'app-add-cancel-course-request',
  templateUrl: './add-cancel-course-request.component.html',
  styleUrls: ['./add-cancel-course-request.component.scss']
})
export class AddCancelCourseRequestComponent implements OnInit {
  cancelCousre: CancelCousreMaster;
  reqData: any;
  msgs: any;
  approve:boolean;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCancelCourseRequestComponent>,
    private toastr: ToastrService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.cancelCousre = { course_number: 0, agreement: 1 };

    this.reqData = this.acadmicProc.reqData;

    this.approve=false;
   ////console.log(this.reqData.notes);
  }

  changeStatus(id, e, i) {
    this.cancelCousre.course_number=id;
  }

  addRequest(data: any) {
    //console.log(data);
    this.acadmicProc.AddRequest(data).then(res => {
      this.msgs = (res as any).messages;
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
