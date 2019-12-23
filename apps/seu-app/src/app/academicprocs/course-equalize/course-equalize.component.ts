import { Component, OnInit } from '@angular/core';
import { CourseEqualizerService } from '../services/course-equalizer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { AddCourseEqualizeComponent } from './diag/add-course-equalize/add-course-equalize.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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
  status;
  isLoading = false;


  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: CourseEqualizerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }
  getRequests() {

    this.acadmicProc.getِgetRequests().then(
      res => {
        ////console.log(res);
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        // //console.log(this.reqData.reqs);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';


    let dialogref = this.dialog.open(AddCourseEqualizeComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  print(req) {
    return this.acadmicProc.Download(req);

  }
  deleting = false;
  delete(id, index) {
    if (confirm('هل انت متأكد؟')) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }

}
