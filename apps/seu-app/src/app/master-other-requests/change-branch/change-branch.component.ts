import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { changeBranch } from 'src/app/shared/models/change-branch';
import { ChangeBranchService } from '../services/change-branch.service';
import { AddChangeBranchComponent } from './diag/add-change-branch/add-change-branch.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-branch',
  templateUrl: './change-branch.component.html',
  styleUrls: ['./change-branch.component.css']
})
export class ChangeBranchComponent implements OnInit {
  
  printAR;
  changeBranch: changeBranch;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ChangeBranchService) { }

  ngOnInit() {
    this.isLoading = true;
    this.changeBranch = {camp:"",reason:"",mobile:""};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading = false;
    console.log(this.reqData);

      }
    );

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddChangeBranchComponent, dialogConfig);
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
      console.log(id);
      this.msgs =   (res as any).messages;

      this.status =   (res as any).status;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
      if (this.status === 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
    });
  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}

}

