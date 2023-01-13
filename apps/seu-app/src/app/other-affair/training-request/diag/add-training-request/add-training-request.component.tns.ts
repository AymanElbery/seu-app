import { Component, OnInit } from '@angular/core';
import {TrainingRequestService} from '../../../services/training-request.service';
import {training} from '../../../../shared/models/training';
import { ModalDialogParams } from 'nativescript-angular/common';
import { AppToasterService } from '../../../../shared/services/app-toaster';


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
  constructor( private _params: ModalDialogParams,private toastr:AppToasterService
             , private acadmicProc: TrainingRequestService) { }

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
        this.toastr.push(this.msgs);
    });

  }
  onSubmit() {
this.addRequest(this.training);
this.closeDiag();

  }


call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}
closeDiag() {
  this._params.closeCallback();
}

}
