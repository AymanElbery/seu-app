import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddChangeMajorComponent } from 'src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component';
import { ToastrService } from 'ngx-toastr';
import { ChangeMajorService } from 'src/app/academicprocs/services/change-major.service';
import { NgForm } from '@angular/forms';
import { ChangeCourseService } from 'src/app/master-other-requests/services/change-course.service';
import { changeCourse } from 'src/app/shared/models/change-course';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-change-course',
  templateUrl: './add-change-course.component.html',
  styleUrls: ['./add-change-course.component.css']
})
export class AddChangeCourseComponent implements OnInit {

  printAR;
  course: changeCourse;
  reqData;
  msgs;
  hiddenfield:true;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddChangeCourseComponent>,
               private toastr: ToastrService,  private acadmicProc: ChangeCourseService) { }

  ngOnInit() {
    this.course = {major: '', mobile: '',reason:'',outside:'',bacholar_copy:''};
    this.acadmicProc.getRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;



  }
    );
  }



  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
    });

  }
  onSubmit(form: NgForm) {
this.addRequest(this.course);
console.log(this.course);
this.dialogRef.close();

  }
  
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.course.bacholar_copy = reader.result;

  }

  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}
closeDiag() {
  this.dialogRef.close();
}
}