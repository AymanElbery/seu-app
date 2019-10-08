import { Component, OnInit } from '@angular/core';
import { RegistrationHelperService } from '../services/registration-helper.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registeration-helper',
  templateUrl: './registeration-helper.component.html',
  styleUrls: ['./registeration-helper.component.css']
})
export class RegisterationHelperComponent implements OnInit {

  printAR;
  reqData;
  msgs;
  status;
  colleges: any;
  college: { theCollege };

  errorMessages: any;
  errorMessage: { theMessages };
  constructor(private toastr: ToastrService, private acadmicProc: RegistrationHelperService) { }


  ngOnInit() {
    // this.cancelCousre = {courses: null, agreement: 1};
    this.college = { theCollege: '' };
    this.errorMessage = { theMessages: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.colleges = this.acadmicProc.reqData.colledges;
        this.errorMessages = this.acadmicProc.reqData.error_messages;
        // console.log(this.reqData.reqs);

      }
    );

  }

  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
        console.log(id);
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
      });
    }

  }

}
