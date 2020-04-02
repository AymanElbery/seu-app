import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { InfoUpdateService } from '../../services/info-update.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { InfoUpdate } from 'src/app/shared/models/info-update';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.css']
})
export class AddNewRequestComponent implements OnInit {

  infoupdate: InfoUpdate;
  cities;
  can_update_data;
  messages;
  isLoading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddNewRequestComponent>, private translate: TranslateService,
    private toastr: AppToasterService, private infoupdateservice: InfoUpdateService) { }

  ngOnInit() {
    this.infoupdate = { first_name: '', mid_name: '', last_name: '', first_name_ar: '', mid_name_ar: '', last_name_ar: '', mobile: '', state: '', city: '', street: '' };
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {
    this.cities = this.infoupdateservice.cities;
    /*
    this.isLoading = true;
    this.infoupdateservice.getRequest().then(
      res => {
        this.can_update_data = (res as any).data["can_update_data"];
        this.cities = (res as any).data["cities"];
        this.messages = (res as any).data["messages"];
        this.isLoading = false;
      }, err => {

        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
    */
  }

  closeDiag() {
    this.dialogRef.close();
  }


  requesting = false;
  addRequest(data: any) {
    this.isLoading = true;
    //console.log("save data",this.data);
    this.infoupdateservice.AddNewRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      //"console.log("response",res);
      if (res['status']) {
        this.dialogRef.close();
      }
      this.requesting = false;
      this.isLoading = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit(form: NgForm) {
    // console.log("save dataa",this.infoupdate);
    this.addRequest(this.infoupdate);
    
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }



}
