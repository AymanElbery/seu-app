import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { ValueItem, SelectedIndexChangedEventData, ValueList } from 'nativescript-drop-down';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.tns.html',
  styleUrls: ['./vouchers.component.tns.css']
})
export class VouchersComponent implements OnInit, OnDestroy {
  p: number;
  filter;
  config: any;
  subscriptionDDL: Subscription;
  FillDDLData: any;
  FillDDLDataYear: any;
  FillDDLDatavouchertype: any;
  subscriptionvoucherlist: Subscription;
  vocherlistdata: any;
  selectedyear: any;
  selectYear = "";
  vouchertype = "";
  years:ValueItem<number>[] = [];
  yearsDropDown;
  types:ValueItem<number>[] = [];
  typesDropDown;
  indexDropdown1: number=0;
  indexDropdown2: number=0;
  clicked: any;

  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, 
    private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngAfterViewInit() {
  }

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
  pageChanged(event) {
    this.config.currentPage = event;
  }

  FillDDL() {
    this.isLoading = true
    this.subscriptionDDL = this.empreqservice.getvaoucherlovs().subscribe(fillddl => {
      if (fillddl) {
        
        this.FillDDLDataYear = (fillddl as any).data["years"];
        this.FillDDLDatavouchertype = (fillddl as any).data["voucherTypes"];
        this.selectedyear = (this.selectedyear ? this.selectedyear : this.FillDDLDataYear.length > 0 ? this.FillDDLDataYear[0]['value']:"");
        this.vouchertype = (this.vouchertype ? this.vouchertype : this.FillDDLDatavouchertype.length>0 ? this.FillDDLDatavouchertype[0]['value']:"");
        this.getvoucherselect(this.vouchertype);
        
        for (let i = 0; i < this.FillDDLDataYear.length; i++) {
          this.years.push(
            {
              value: this.FillDDLDataYear[i].value,
              display: this.FillDDLDataYear[i].label
            }
          );
        }
        this.yearsDropDown = new ValueList(this.years);

        for (let i = 0; i < this.FillDDLDatavouchertype.length; i++) {
          this.types.push(
            {
              value: this.FillDDLDatavouchertype[i].value,
              display: this.FillDDLDatavouchertype[i].label
            }
          );
        }
        this.typesDropDown = new ValueList(this.types);


      }
      this.isLoading = false;
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );
  }

  getYear(val: SelectedIndexChangedEventData) {
    this.indexDropdown1=val.newIndex;
    this.vocherlistdata = [];
    const code = this.yearsDropDown.getValue(val.newIndex);
    this.selectedyear = code;
    this.getvoucherselect(this.vouchertype);
  }
  
  getType(val: SelectedIndexChangedEventData) {
    const code = this.typesDropDown.getValue(val.newIndex);
    this.indexDropdown2=val.newIndex;
    this.vouchertype = code;
    this.isLoading = true
    this.subscriptionvoucherlist = this.empreqservice.getvaoucherlist(this.selectedyear, code).subscribe(vocherlist => {
      if (vocherlist) {
        this.vocherlistdata = (vocherlist as any).data["vouchersTable"];
        ////console.log("voucher data",this.vocherlistdata);      
        this.isLoading = false;
      } else {
        // this.messages = [];
      }
    });

  }

  getvoucherselect(vouchertype: any) {
    this.vouchertype = vouchertype;
    this.isLoading = true
    this.subscriptionvoucherlist = this.empreqservice.getvaoucherlist(this.selectedyear, vouchertype).subscribe(vocherlist => {
      if (vocherlist) {
        this.vocherlistdata = (vocherlist as any).data["vouchersTable"];
        this.isLoading = false;
      } else {
      }
    });

  }
  onLoadedFirstDropDown(dropdown1){
    dropdown1.selectedIndex=this.indexDropdown1;
  }
  onLoadedSecondDropDown(dropdown2){
    dropdown2.selectedIndex=this.indexDropdown2;
  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }
}
