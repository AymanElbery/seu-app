import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TermPostponeService } from 'src/app/academicprocs/services/term-postpone.service';
import { StudyPostponeService } from '../services/study-postpone.service';
import { studyPostpone } from 'src/app/shared/models/study-postpone';
import { AddStudyPostponeComponent } from './diag/add-study-postpone/add-study-postpone.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-study-postpone',
  templateUrl: './study-postpone.component.html',
  styleUrls: ['./study-postpone.component.css']
})
export class StudyPostponeComponent implements OnInit {

 
  studypostpone: studyPostpone;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc:StudyPostponeService) { }

  ngOnInit() {
    this.isLoading=true;
    this.studypostpone = {num_terms: '', reason: '',mobile:''};
    this.acadmicProc.getRequest().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
    // console.log(this.reqData.requests);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddStudyPostponeComponent, dialogConfig);
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
     if (this.status === 1) {
        this.acadmicProc.reqData.requests.splice(index, 1);
      }   });
  }
 }
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}

}
