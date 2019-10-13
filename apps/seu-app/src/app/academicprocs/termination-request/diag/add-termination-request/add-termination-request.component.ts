import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {TerminationService} from '../../../services/termination.service';
import {terminationRequest} from '../../../../shared/models/termination-request';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-termination-request',
  templateUrl: './add-termination-request.component.html',
  styleUrls: ['./add-termination-request.component.css']
})
export class AddTerminationRequestComponent implements OnInit {

 
  printAR;
  termination: terminationRequest;
  reqData;
  msgs;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddTerminationRequestComponent>,
               private toastr: ToastrService,  private acadmicProc: TerminationService) { }

  ngOnInit() {
    this.termination = {reason:''};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;



  }
    );
  }



  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
    });

  }
  onSubmit(form: NgForm) {
this.addRequest(this.termination);
console.log(this.termination);
this.dialogRef.close();

  }
  // handleInputChange(e) {
  //   const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   const pattern = /image-*/;
  //   const reader = new FileReader();
  //   /* if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;
  //   }
  //    */
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);
  // }
  // _handleReaderLoaded(e) {
  //   const reader = e.target;
  //   this.reEnroll.proof = reader.result;
  //   console.log(this.reEnroll.proof);
  // }

  print(req) {
return    this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}
closeDiag() {
  this.dialogRef.close();
}
}
