import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/account/services/user.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { InvoicesService } from '../services/invoices.service';

@Component({
  selector: 'app-student-invoices',
  templateUrl: './student-invoices.component.html',
  styleUrls: ['./student-invoices.component.css']
})
export class StudentInvoicesComponent implements OnInit {
    reqData;
    msgs;
    status;
    isLoading = false;
    term ;

    constructor(
        private translate: TranslateService, 
        private userService: UserService,
        private acadmicProc: InvoicesService,
        private toastr: AppToasterService
    ){
        this.getInvoices();
   }

    ngOnInit() {

    }

    getInvoices() {
        this.isLoading = true;
        this.acadmicProc.getInvoices().then(
          res => {
            this.acadmicProc.reqData = (res as any).data;
            this.acadmicProc.msgs = (res as any).messages;
            this.reqData = this.acadmicProc.reqData;
            this.term = this.reqData.term_ar;
            this.msgs = this.acadmicProc.msgs;
            this.isLoading = false;
          }, err => {
            this.toastr.tryagain();
            this.isLoading = false;
          });
    }

    download() {
        return this.acadmicProc.download();
    }
}
