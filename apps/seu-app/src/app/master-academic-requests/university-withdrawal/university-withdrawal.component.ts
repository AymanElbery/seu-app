import { Component, OnInit } from '@angular/core';
import { masterWithdrawal } from 'src/app/shared/models/master-withdrawal';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UniversityWithdrawalService } from '../services/university-withdrawal.service';
import { AddWithdrawalRequestComponent } from './diag/add-withdrawal-request/add-withdrawal-request.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-university-withdrawal',
  templateUrl: './university-withdrawal.component.html',
  styleUrls: ['./university-withdrawal.component.css']
})
export class UniversityWithdrawalComponent implements OnInit {

  printAR;
  withdrawalRequest: masterWithdrawal;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc:UniversityWithdrawalService) { }

  ngOnInit() {
    this.isLoading=true;
    this.withdrawalRequest = {email: "", mobile: ""};
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

    this.dialog.open(AddWithdrawalRequestComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }

  print(req) {
      return  this.acadmicProc.Download(req);
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
