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
  constructor(
    private toastr: AppToasterService, private acadmicProc: CancelCourseService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.cancelCousre = { course_number: 0, agreement: 1 };

    this.reqData = this.acadmicProc.reqData;

    this.approve = false;
    console.log(this.reqData.notes);
  }

  changeStatus(id, e, i) {
    this.cancelCousre.course_number = id;
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


}
