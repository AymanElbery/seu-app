import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {TrainingRequestService} from '../services/training-request.service';
import {training} from '../../shared/models/training';
import {AddTrainingRequestComponent} from '../training-request/diag/add-training-request/add-training-request.component';

@Component({
  selector: 'app-training-request',
  templateUrl: './training-request.component.html',
  styleUrls: ['./training-request.component.css']
})
export class TrainingRequestComponent implements OnInit {

  printAR;
  training: training;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: TrainingRequestService) { }

  ngOnInit() {
    this.training = {organization:''};
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

    this.dialog.open(AddTrainingRequestComponent, dialogConfig);
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
return this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.msgs =   (res as any).messages;

      this.status =   (res as any).status;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);
    
        });
        if(this.status == 1)
          this.acadmicProc.reqData.requests.splice(index, 1);
    });

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}

}
