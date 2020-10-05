import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';

@Component({
  selector: 'app-translation-pendding-requests',
  templateUrl: './translation-pendding-requests.component.html',
  styleUrls: ['./translation-pendding-requests.component.css']
})
export class TranslationPenddingRequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsService: ClientAdminRequestsService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests() {
    this.isLoading = true;
    this.requestsService.getAllRequests().subscribe((response) => {
      this.requestsList = response['data'];
      console.log(this.requestsList);
      this.isLoading = false;
    }, err => {
      this.requestsService.tryagain();
      this.isLoading = false;
    });
  }

  openDetailsDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { 'req': req };
    let dialogref = this.dialog.open(TranslationViewRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getAllRequests();
      }
    });
  }

}