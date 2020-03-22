import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit,OnDestroy {
  p: number;
  filter; 
  config: any;
  subscriptionDDL: Subscription;
  FillDDLData: any;
  FillDDLDataYear: any;
  FillDDLDatavouchertype: any;
  subscriptionvoucherlist: Subscription;
  vocherlistdata: any;
  selectedyear:any;
  selectYear = "";
  vouchertype = "";
  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.FillDDL();
    //this.getEmptraining();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDL();
      //this.getEmptraining();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  FillDDL(){
    this.isLoading = true
    this.subscriptionDDL = this.empreqservice.getvaoucherlovs().subscribe(fillddl => {
      if (fillddl) {
        this.FillDDLDataYear = (fillddl as any).data["years"];
        this.FillDDLDatavouchertype = (fillddl as any).data["voucherTypes"];
        ////console.log("emp lett",fillddl);      
        this.isLoading = false;
      } else {

      }
    });
  }

  getyearsselect(year:any){  
 this.selectedyear=year;
 this.vouchertype="0";
 this.vocherlistdata="";
  }

  getvoucherselect(vouchertype:any){   
    this.vouchertype=vouchertype;
   // //console.log("param",this.selectedyear,vouchertype);
   //this.selectYear=this.selectedyear;
      this.isLoading = true
      this.subscriptionvoucherlist = this.empreqservice.getvaoucherlist(this.selectedyear,vouchertype).subscribe(vocherlist => {
       if (vocherlist) {       
         this.vocherlistdata = (vocherlist as any).data["vouchersTable"];
         ////console.log("voucher data",this.vocherlistdata);      
         this.isLoading = false;      
       } else {       
        // this.messages = [];
       }
     });
    
    }

  



}
