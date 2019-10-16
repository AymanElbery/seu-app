import { Component, OnInit } from '@angular/core';
import { ChangeMajorService } from '../services/change-major.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { NgForm } from '@angular/forms';
import { AddChangeMajorComponent } from './diag/add-change-major/add-change-major.component';

@Component({
  selector: 'app-change-major',
  templateUrl: './change-major.component.html',
  styleUrls: ['./change-major.component.css']
})
export class ChangeMajorComponent implements OnInit {



  printAR;
  cancelCousre: CancelCousre;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ChangeMajorService) { }

  ngOnInit() {
    this.cancelCousre = {courses: null, agreement: 1};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    // console.log(this.reqData.reqs);

      }
    );

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddChangeMajorComponent, dialogConfig);
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
      console.log(id);
      this.msgs =   (res as any).messages;

      this.status =   (res as any).status;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
      if (this.status === 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
    });
  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}

}
