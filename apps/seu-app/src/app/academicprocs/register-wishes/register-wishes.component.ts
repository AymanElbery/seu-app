import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegisterWishesService } from '../services/register-wishes.service';
import { RegisterWishes } from 'src/app/shared/models/register-wishes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-wishes',
  templateUrl: './register-wishes.component.html',
  styleUrls: ['./register-wishes.component.css']
})
export class RegisterWishesComponent implements OnInit {
  registerWishes: RegisterWishes;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog, private toastr: ToastrService, private acadmicProc: RegisterWishesService) { }

  ngOnInit() {
    this.registerWishes = { tow_days:0,wish:'' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;

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



  onSubmit(form: NgForm) {

    this.addRequest(this.registerWishes);
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

}
