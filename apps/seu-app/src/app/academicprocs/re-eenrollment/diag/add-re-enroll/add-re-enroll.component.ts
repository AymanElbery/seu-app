import { Component, OnInit } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { ReEnrollService } from 'src/app/academicprocs/services/re-enroll.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.reEnroll = {proof: '', reason: '', as_proof: '1'};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddCourseCancelComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


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

}
