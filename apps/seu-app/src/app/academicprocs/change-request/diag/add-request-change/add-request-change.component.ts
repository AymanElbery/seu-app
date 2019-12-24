import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequest } from 'src/app/shared/models/change-request';
import { ChangeRequestService } from 'src/app/academicprocs/services/change-request.service';

@Component({
  selector: 'app-add-request-change',
  templateUrl: './add-request-change.component.html',
  styleUrls: ['./add-request-change.component.scss']
})
export class AddRequestChangeComponent implements OnInit {

  //changeRequest: ChangeRequest;

  camps: any;
  cmp:{camp};
msgs: any;
//choosedCode:string;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddRequestChangeComponent>,
               private toastr: ToastrService, private acadmicProc: ChangeRequestService ) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    this.cmp = {camp:''};
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.camps = this.acadmicProc.reqData.camps;
        this.msgs = this.acadmicProc.msgs;
        ////console.log(this.camps);
        //this.canAdd = this.reqData.can_add_new_request;
          }
        );
    
      }

  addRequest(data: any) {
    ////console.log(data);
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });

    //this.cmp = {camp:''};

  }
  
  onSubmit() {
    if(this.cmp.camp == "")
      return;
    //this.changeRequest.camp.push({key:"camp",value:this.choosedCode});
    /*let dropDown;
    dropDown = document.getElementById("selected_id") as HTMLSelectElement;
    let selectedItem =dropDown[dropDown.selectedIndex];
    ////console.log(selectedItem.innerHTML  + "" + selectedItem.value);
    this.changeRequest.camp.push({key:selectedItem.innerHTML,value:selectedItem.value});*/
    /*if(this.changeRequest.camp.length == 0)
      return;*/
    this.addRequest(this.cmp);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }
}
