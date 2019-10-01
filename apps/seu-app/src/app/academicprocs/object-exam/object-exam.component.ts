import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ObjectExamService } from '../services/object-exam.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AddExamObjectComponent } from './diag/add-exam-object/add-exam-object.component';


@Component({
  selector: 'app-object-exam',
  templateUrl: './object-exam.component.html',
  styleUrls: ['./object-exam.component.css']
})
export class ObjectExamComponent implements OnInit {

  //changeRequest: ChangeRequest;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ObjectExamService) { }

  ngOnInit() {
    this.acadmicProc.getRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    console.log(this.reqData.banks.CRN);
    console.log((res as any).status);

      }
    )}

    openDialoge() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = '50%';
  
      this.dialog.open(AddExamObjectComponent, dialogConfig);
    }
  
    /* addRequest(data) {
      this.acadmicProc.AddRequest(data).then(  res => {
        this.acadmicProc.msgs = (res as any).messages;
          });
    } 
    onSubmit(form: NgForm) {
  this.addRequest(form.value);
  
  
    }
  
    */
    delete(id, index) {
     // console.log(id);
  
      if ( confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
       
  //console.log((res as any).status);
  this.msgs =   (res as any).messages;
  this.status =   (res as any).status;
  //console.log(this.status);

  this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
    if(this.status == 1)
        this.acadmicProc.reqData.requests.splice(index, 1);
      });
      //console.log(this.status);
      
  
    }
  
  }
  }


