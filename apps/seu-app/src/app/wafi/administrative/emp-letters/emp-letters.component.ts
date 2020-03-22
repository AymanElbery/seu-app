import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AdministrativeService } from '../../services/administrative.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-emp-letters',
  templateUrl: './emp-letters.component.html',
  styleUrls: ['./emp-letters.component.css']
})
export class EmpLettersComponent implements OnInit {
  p: number;
  filter;
  config: any;
  subscriptionletterslist: Subscription;
  emplistletters: any;
  constructor(private http: HttpClient, private empreqservice: AdministrativeService, private toastr: AppToasterService, private translate: TranslateService) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getEmpletters();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getEmpletters();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getEmpletters() {

    this.isLoading = true
    this.subscriptionletterslist = this.empreqservice.getLetterlist().subscribe(empletters => {
      if (empletters) {
        this.emplistletters = (empletters as any).data["lettersTable"];
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }



}

