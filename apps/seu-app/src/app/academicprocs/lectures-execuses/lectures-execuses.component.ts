import { Component, OnInit } from '@angular/core';
import { LectureExecuseServiceService } from '../services/lecture-execuse-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddCourseEqualizeComponent } from '../course-equalize/diag/add-course-equalize/add-course-equalize.component';
import { NgForm } from '@angular/forms';
import { AddLecturesExecusesComponent } from './diag/add-lectures-execuses/add-lectures-execuses.component';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';

@Component({
  selector: 'app-lectures-execuses',
  templateUrl: './lectures-execuses.component.html',
  styleUrls: ['./lectures-execuses.component.css']
})
export class LecturesExecusesComponent implements OnInit {

  printAR;
  lectureExecuse: LectureExecuse;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: LectureExecuseServiceService) { }

  ngOnInit() {
this.lectureExecuse = {attachment: '', courses: [], date: '', reason: '', type: '', week: ''};
this.acadmicProc.getRequests().then(
      res => {
        console.log(res);
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
    dialogConfig.width = '60%';


    this.dialog.open(AddLecturesExecusesComponent, dialogConfig);
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

}
