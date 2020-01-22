import { Component, OnInit, Inject } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { ReEnrollService } from 'src/app/academicprocs/services/re-enroll.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddCourseCancelComponent } from 'src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-re-enroll',
  templateUrl: './add-re-enroll.component.html',
  styleUrls: ['./add-re-enroll.component.css']
})
export class AddReEnrollComponent implements OnInit {



  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddReEnrollComponent>,
               private toastr: ToastrService,  private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.reEnroll = {proof: '', reason: '', has_proof: '1'};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;



  }
    );
  }



  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
    });

  }
  onSubmit(form: NgForm) {
this.addRequest(this.reEnroll);
console.log(this.reEnroll);
this.dialogRef.close();

  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.reEnroll.proof = reader.result;
    console.log(this.reEnroll.proof);
  }

  print(req) {
return    this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}
closeDiag() {

  this.dialogRef.close();
}
}