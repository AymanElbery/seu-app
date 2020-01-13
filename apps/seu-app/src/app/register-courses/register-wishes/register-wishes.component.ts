import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegisterWishesService } from '../services/register-wishes.service';
import { RegisterWishes } from 'src/app/shared/models/register-wishes';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-register-wishes',
  templateUrl: './register-wishes.component.html',
  styleUrls: ['./register-wishes.component.scss']
})
export class RegisterWishesComponent implements OnInit {


  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: RegisterWishesService) { }
  registerWishes: RegisterWishes;
  reqData;
  msgs;
  status;
  isLoading = false;

  deleting = false;

  requesting = false;

  ngOnInit() {
    this.getServiceRequest();
  }

  getServiceRequest() {
    this.isLoading = true;
    this.registerWishes = { tow_days: 0, wish: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;

      }
    );
  }
  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        const messages = (res as any).messages;
        this.status = (res as any).status;
        this.toastr.push(messages);
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      });
    }

  }



  onSubmit(form: NgForm) {
    this.addRequest(this.registerWishes);
  }
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      this.requesting = false;
      if ((res as any).status) {
        this.getServiceRequest();
        this.registerWishes = { tow_days: 0, wish: '' };
      }
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }

}
