import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCancelCourseRequestComponent } from './diag/add-cancel-course-request/add-cancel-course-request.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CancelCourseService } from '../services/cancel-course.service';
import { courseCancel } from 'src/app/shared/models/course-cancel';

@Component({
  selector: 'app-cancel-course',
  templateUrl: './cancel-course.component.html',
  styleUrls: ['./cancel-course.component.css']
})
export class CancelCourseComponent implements OnInit {

  printAR;
  cancelCousre: courseCancel;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.isLoading=true;
    this.cancelCousre = {course_number:'', agreement: ''};
    this.acadmicProc.getRequest().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
     console.log(this.reqData.requests);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '80%';
   /* dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '100px', left: '25px' };*/

    this.dialog.open(AddCancelCourseRequestComponent, dialogConfig);
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
