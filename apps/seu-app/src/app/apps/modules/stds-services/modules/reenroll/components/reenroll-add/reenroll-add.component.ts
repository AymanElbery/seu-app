import { Component, OnInit, Inject } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ReenrollService } from '../../../../services/reenroll.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-reenroll-add',
  templateUrl: './reenroll-add.component.html',
  styleUrls: ['./reenroll-add.component.css']
})
export class ReEnrollAddComponent implements OnInit {

  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  requesting = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ReEnrollAddComponent>,
    private toastr: AppToasterService, private service: ReenrollService) { }

    ngOnInit() {
        this.reEnroll = { proof: '', reason: '', has_proof: '' };
    }
  
    addRequest(data: any) {
        this.service.AddRequest(data).subscribe(res => {
            //this.toastr.push(res.res_code[0]);
            if (res['status']) {
                this.dialogRef.close(true);
            }
            this.requesting = false;
        },
        err => {
            this.toastr.tryagain();
            this.requesting = false;
        });
    }
    onSubmit(form: NgForm) {
        if (this.requesting) {
        return false;
        }
        this.requesting = true;
        if (this.reEnroll.has_proof.toString() == "true") {
        this.reEnroll.has_proof = "1"
        }
        else {
        this.reEnroll.has_proof = "0"
        }
        this.addRequest(this.reEnroll);
    }

    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const pattern = /pdf-*/;
        const reader = new FileReader();
        /* if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
        }
        */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        const reader = e.target;
        this.reEnroll.proof = reader.result;
    }

    call(hr) {
        return Math.floor(Math.random() * 10) + hr;
    }
    closeDiag() {
        this.dialogRef.close(false);
    }
}
