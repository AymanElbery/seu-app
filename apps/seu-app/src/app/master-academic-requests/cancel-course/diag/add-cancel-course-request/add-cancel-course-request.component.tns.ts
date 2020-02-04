import { Component, OnInit } from '@angular/core';
import { CancelCourseService } from '../../../services/cancel-course.service';
import { CancelCousreMaster } from '../../../../shared/models/cancel-cousre-master';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-add-cancel-course-request',
  templateUrl: './add-cancel-course-request.component.tns.html',
  styleUrls: ['./add-cancel-course-request.component.tns.scss']
})
export class AddCancelCourseRequestComponent implements OnInit {
  cancelCousre: CancelCousreMaster;
  reqData: any;
  msgs: any;
  approve: boolean;
  private imageSrc = '';
  radioButtonOptions=[];
  constructor(
    private toastr: AppToasterService, private acadmicProc: CancelCourseService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.cancelCousre = { course_number: 0, agreement: 1 };

    this.reqData = this.acadmicProc.reqData;

    this.approve = false;
    for(let i=0;i<this.reqData.courses.length;i++){
      this.radioButtonOptions[i]={"courses":this.reqData.courses[i],"selected":false}

    }
  }

  changeStatus(item) {
    item.selected = !item.selected;

    if (!item.selected) {
      return;
    }

    // uncheck all other options
    this.radioButtonOptions.forEach(option => {
      if (option.courses.CRN !== item.courses.CRN) {
        option.selected = false;
      }
    });
  
    this.cancelCousre.course_number = item.courses.CRN;

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/academicrequests/cancelcourse']);
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.cancelCousre);
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
