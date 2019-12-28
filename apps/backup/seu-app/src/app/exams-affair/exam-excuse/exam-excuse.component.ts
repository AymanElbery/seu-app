import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ExamExcuseService} from '../services/exam-excuse.service';
import {AddExamExcuseComponent} from './diag/add-exam-excuse/add-exam-excuse.component';

@Component({
  selector: 'app-exam-excuse',
  templateUrl: './exam-excuse.component.html',
  styleUrls: ['./exam-excuse.component.css']
})
export class ExamExcuseComponent implements OnInit {


  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ExamExcuseService) { }

  ngOnInit() {
  this.isLoading=true;
  this.acadmicProc.getِgetRequests().then(
      res => {
        
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading=false;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddExamExcuseComponent, dialogConfig);
  }


  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {

this.addRequest(form.value);


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
    //this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}


}
