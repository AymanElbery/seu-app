import { Component, OnInit } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CancelCourseService } from '../services/cancel-course.service';
import { AddCourseCancelComponent } from './diag/add-course-cancel/add-course-cancel.component';

@Component({
  selector: 'app-cancel-course',
  templateUrl: './cancel-course.component.html',
  styleUrls: ['./cancel-course.component.css']
})
export class CancelCourseComponent implements OnInit {


  printAR;
  cancelCousre: CancelCousre;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.isLoading=true;
    this.cancelCousre = {courses: null, agreement: 1};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
    // //console.log(this.reqData.requests);
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
