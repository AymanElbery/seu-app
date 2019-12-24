import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChangeBranchService } from 'src/app/master-other-requests/services/change-branch.service';
import { changeBranch } from 'src/app/shared/models/change-branch';

@Component({
  selector: 'app-add-change-branch',
  templateUrl: './add-change-branch.component.html',
  styleUrls: ['./add-change-branch.component.scss']
})
export class AddChangeBranchComponent implements OnInit {
  printAR;
  branch: changeBranch;
  reqData;
  msgs;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddChangeBranchComponent>,
               private toastr: ToastrService,  private acadmicProc: ChangeBranchService) { }

  ngOnInit() {
    this.branch = {camp: '',reason:'',mobile:''};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

      //console.log(this.reqData);

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
this.addRequest(this.branch);
//console.log(this.branch);
this.dialogRef.close();

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


