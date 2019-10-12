import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegistrationHelperService } from 'src/app/academicprocs/services/registration-helper.service';
import { RegisterationHelper } from 'src/app/shared/models/registeration-helper';

@Component({
  selector: 'app-add-registeration-helper',
  templateUrl: './add-registeration-helper.component.html',
  styleUrls: ['./add-registeration-helper.component.css']
})
export class AddRegisterationHelperComponent implements OnInit {

  registerationHelper: RegisterationHelper;
  reqData: any;
  msgs: any;
  colleges: any;
  errorMessages: any;
  courses: any;
  departments: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddRegisterationHelperComponent>,
    private toastr: ToastrService, private acadmicProc: RegistrationHelperService) { }

  ngOnInit() {


    this.registerationHelper = { colledge: '', course: '', department: '', comment: '', message: '' };

    this.reqData = this.acadmicProc.reqData;
    this.colleges = this.acadmicProc.reqData.colledges;
    this.errorMessages = this.acadmicProc.reqData.error_messages;
  }

  onSubmit(form: NgForm) {

    this.addRequest(this.registerationHelper);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }


  addRequest(data: any) {
    //console.log(data);
    this.acadmicProc.AddRequest(data).then(res => {
   //   this.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

      });
    });



    //this.cmp = {camp:''};

  }

  collegeCourses(collegeId) {
    this.acadmicProc.getِgetCourse(collegeId).then(
      res => {
        this.acadmicProc.courses = (res as any).data;
        this.courses = this.acadmicProc.courses;
      }
    );
  }

  courseDepartments(courseId) {
    this.acadmicProc.getِgetDepartments(courseId).then(
      res => {
        this.acadmicProc.departments = (res as any).data;
        this.departments = this.acadmicProc.departments;
      }
    );
  }


}