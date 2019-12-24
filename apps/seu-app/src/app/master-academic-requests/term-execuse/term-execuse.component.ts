import { Component, OnInit } from '@angular/core';
import { TermExecuseService } from '../services/term-execuse.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { termExecuse } from 'src/app/shared/models/term-execue';
import { AddTermExecuseComponent } from './diag/add-term-execuse/add-term-execuse.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-term-execuse',
  templateUrl: './term-execuse.component.html',
  styleUrls: ['./term-execuse.component.scss']
})
export class TermExecuseComponent implements OnInit {

 
  termExecuse: termExecuse;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc:TermExecuseService) { }

  ngOnInit() {
    this.isLoading=true;
    this.termExecuse = {reason: '', mobile: '',num_terms:''};
    this.acadmicProc.getRequest().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
    // //console.log(this.reqData.requests);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddTermExecuseComponent, dialogConfig);
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
