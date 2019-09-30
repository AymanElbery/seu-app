import { Component, OnInit } from '@angular/core';
import { CourseEqualizerService } from '../services/course-equalizer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { AddCourseEqualizeComponent } from './diag/add-course-equalize/add-course-equalize.component';

@Component({
  selector: 'app-course-equalize',
  templateUrl: './course-equalize.component.html',
  styleUrls: ['./course-equalize.component.css']
})
export class CourseEqualizeComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: CourseEqualizerService) { }

  ngOnInit() {
this.reason = '';
this.acadmicProc.getِgetRequests().then(
      res => {
        console.log(res);
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        //console.log(this.reqData.reqs);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';


    this.dialog.open(AddCourseEqualizeComponent, dialogConfig);
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
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}

}
