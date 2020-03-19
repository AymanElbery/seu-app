import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-emp-custody',
  templateUrl: './emp-custody.component.html',
  styleUrls: ['./emp-custody.component.css']
})
export class EmpCustodyComponent implements OnInit,OnDestroy {
  p: number;
  filter; 
  config: any;
  subscriptioncustodylist: Subscription;
  emplistcustody: any;
  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getEmpCustody();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getEmpCustody();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  getEmpCustody() {

    this.isLoading = true
    this.subscriptioncustodylist = this.empreqservice.getLetterlist().subscribe(empcustody => {
      if (empcustody) {
        this.emplistcustody = (empcustody as any).data["custodyTable"];
        console.log("emp cust",this.emplistcustody);      
        this.isLoading = false;
      } else {

      }
    });

  }



}

