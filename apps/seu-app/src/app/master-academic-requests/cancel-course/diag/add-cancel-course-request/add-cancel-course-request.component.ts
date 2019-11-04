import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CancelCourseService } from 'src/app/master-academic-requests/services/cancel-course.service';
import { courseCancel } from 'src/app/shared/models/course-cancel';

@Component({
  selector: 'app-add-cancel-course-request',
  templateUrl: './add-cancel-course-request.component.html',
  styleUrls: ['./add-cancel-course-request.component.css']
})
export class AddCancelCourseRequestComponent implements OnInit {

  cancelCousre: courseCancel;
  reqData: any;
msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddCancelCourseRequestComponent>,
               private toastr: ToastrService, private acadmicProc: CancelCourseService ) { }

  ngOnInit() {
    this.cancelCousre = {course_number:'', agreement: ''};

    this.reqData = this.acadmicProc.reqData;

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
  changeStatus(id, e, i) {
    if (e.target.checked) {
     this.cancelCousre.course_number=id;
    } 
  }
  onSubmit(form: NgForm) {
this.addRequest(this.cancelCousre);
console.log(this.cancelCousre);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
