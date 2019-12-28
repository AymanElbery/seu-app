import { Component, OnInit } from '@angular/core';
import { LectureExecuseServiceService } from '../services/lecture-execuse-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddCourseEqualizeComponent } from '../course-equalize/diag/add-course-equalize/add-course-equalize.component';
import { NgForm } from '@angular/forms';
import { AddLecturesExecusesComponent } from './diag/add-lectures-execuses/add-lectures-execuses.component';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-lectures-execuses',
  templateUrl: './lectures-execuses.component.html',
  styleUrls: ['./lectures-execuses.component.scss']
})
export class LecturesExecusesComponent implements OnInit {

  printAR;
  lectureExecuse: LectureExecuse;
  reqData;
  msgs;
  isLoading = false;

  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: LectureExecuseServiceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.lectureExecuse = { attachment: '', courses: [], date: '', reason: '', type: '', week: '' };
    this.getRequests();
  }
  getRequests() {
    this.acadmicProc.getRequests().then(
      res => {
        //console.log(res);
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';


    let dialogref =  this.dialog.open(AddLecturesExecusesComponent, dialogConfig);
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
          this.reqData.requests.splice(index, 1);
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
