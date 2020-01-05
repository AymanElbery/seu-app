import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {TrainingRequestService} from '../../../services/training-request.service';
import {training} from '../../../../shared/models/training';

@Component({
  selector: 'app-add-training-request',
  templateUrl: './add-training-request.component.html',
  styleUrls: ['./add-training-request.component.scss']
})
export class AddTrainingRequestComponent implements OnInit {

  printAR;
  training: training;
  reqData;
  msgs;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddTrainingRequestComponent>,
               private toastr: ToastrService,  private acadmicProc: TrainingRequestService) { }

  ngOnInit() {
    this.training = {organization:''};
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
        //console.log( this.msgs);
        });
    });

  }
  onSubmit(form: NgForm) {
this.addRequest(this.training);
//console.log(this.training);
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
  //   //console.log(this.reEnroll.proof);
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
