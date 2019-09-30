import { Component, OnInit } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReEnrollService } from '../services/re-enroll.service';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { NgForm } from '@angular/forms';
import { AddReEnrollComponent } from './diag/add-re-enroll/add-re-enroll.component';

@Component({
  selector: 'app-re-eenrollment',
  templateUrl: './re-eenrollment.component.html',
  styleUrls: ['./re-eenrollment.component.css']
})
export class ReEenrollmentComponent implements OnInit {



  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ReEnrollService) { }

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

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddReEnrollComponent, dialogConfig);
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
      this.msgs =   (res as any).messages;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);
    
        });
    });
    this.acadmicProc.reqData.requests.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}


}
