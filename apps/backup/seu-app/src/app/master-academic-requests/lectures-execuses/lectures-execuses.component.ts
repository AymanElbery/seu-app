import { Component, OnInit } from '@angular/core';
import { AddLecturesExecusesComponent } from './diag/add-lectures-execuses/add-lectures-execuses.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';
import {LecturesExecusesService} from '../services/lectures-execuses.service';
import { NgForm } from '@angular/forms';

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
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: LecturesExecusesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.lectureExecuse = {attachment: '', courses: [], date: '', reason: '', type: '', week: ''};
    this.acadmicProc.getRequests().then(
      res => {
       
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        //console.log( this.reqData);
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
        //console.log(res);
    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}


}
