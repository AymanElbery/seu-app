import { Component, OnInit } from '@angular/core';
import { changeCourse } from 'src/app/shared/models/change-course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChangeCourseService } from '../services/change-course.service';
import { AddChangeCourseComponent } from './diag/add-change-course/add-change-course.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-course',
  templateUrl: './change-course.component.html',
  styleUrls: ['./change-course.component.css']
})
export class ChangeCourseComponent implements OnInit {

  changecourse: changeCourse;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc:ChangeCourseService) { }

  ngOnInit() {
    this.isLoading=true;
    this.changecourse = {bacholar_copy:'',major:'',mobile:'',reason:'',academic_record:'',outside:''};
    this.acadmicProc.getRequests().then(
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

    this.dialog.open(AddChangeCourseComponent, dialogConfig);
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