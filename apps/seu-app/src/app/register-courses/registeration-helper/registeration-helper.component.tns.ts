import { Component, OnInit } from '@angular/core';
import { RegistrationHelperService } from '../services/registration-helper.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddRegisterationHelperComponent } from './diag/add-registeration-helper/add-registeration-helper.component';

@Component({
  selector: 'app-registeration-helper',
  templateUrl: './registeration-helper.component.html',
  styleUrls: ['./registeration-helper.component.scss']
})
export class RegisterationHelperComponent implements OnInit {

  printAR;
  reqData;
  msgs;
  status;
  isLoading = false;
  /*colleges: any;
  college: { theCollege };

  errorMessages: any;
  errorMessage: { theMessages };*/


  constructor(public dialog: MatDialog, private toastr: ToastrService, private acadmicProc: RegistrationHelperService) { }


  ngOnInit() {
    // this.cancelCousre = {courses: null, agreement: 1};
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        // this.colleges = this.acadmicProc.reqData.colledges;
        //  this.errorMessages = this.acadmicProc.reqData.error_messages;
        // //console.log(this.reqData);

      }
    );



  }



  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
        // console.log(id);
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        // tslint:disable-next-line: triple-equals
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
      });
    }

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.direction = 'rtl';
    dialogConfig.position = { top: '100px', left: '25px' };


    this.dialog.open(AddRegisterationHelperComponent, dialogConfig);
  }

}
