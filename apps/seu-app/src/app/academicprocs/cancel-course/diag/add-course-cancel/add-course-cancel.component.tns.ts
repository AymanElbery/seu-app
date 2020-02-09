import { Component, OnInit} from '@angular/core';
import { CancelCourseService } from '../../../services/cancel-course.service';
import { CancelCousre } from '../../../../shared/models/cancel-cousre';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-add-course-cancel',
  templateUrl: './add-course-cancel.component.tns.html',
  styleUrls: ['./add-course-cancel.component.tns.scss']
})
export class AddCourseCancelComponent implements OnInit {

  cancelCousre: CancelCousre;
  reqData = {notes:[],RegisteredCourses:[]};
  msgs: [];
  private imageSrc = '';

  constructor(private toastr: AppToasterService, 
    private acadmicProc: CancelCourseService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.cancelCousre = { courses: [], agreement: 1 };
    this.reqData = this.acadmicProc.reqData;
  }
  changeStatus(id, e, i) {
    if (e.value) {
      const selCouse = { value: id };
      this.cancelCousre.courses.push(selCouse);
    } else {
      const index = this.cancelCousre.courses.findIndex(e => { return e.value == id });
      if (index != -1)
        this.cancelCousre.courses.splice(index, 1);
    }
  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/cancelcourse']);
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
