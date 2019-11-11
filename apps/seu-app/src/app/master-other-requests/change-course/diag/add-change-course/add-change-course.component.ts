import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeCourseService } from 'src/app/master-other-requests/services/change-course.service';
import { changeCourse } from 'src/app/shared/models/change-course';

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
    this.course = {major: '', mobile: '',reason:'',outside:'',bacholar_copy:'',academic_record:''};
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
  // if(this.course.outside.toString()=="true")
  // {
  //   this.course.outside="1"
  // }
  // else
  // {
  //   this.course.outside="0"
  // }
 
    this.addRequest(this.course);
    this.dialogRef.close();
    console.log(this.course);
   // alert(this.course.outside);

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
    this.course.academic_record = reader.result;

  }

  handleInputChangeCopy(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoadedcopy.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedcopy(e) {
    const reader = e.target;
    this.course.bacholar_copy = reader.result;

  }
  

  handleInputChangeOut(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoadedOut.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedOut(e) {
    const reader = e.target;
    this.course.outside = reader.result;

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