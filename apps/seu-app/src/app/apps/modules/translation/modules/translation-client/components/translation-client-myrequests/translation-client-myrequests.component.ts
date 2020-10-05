import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientMyrequestsService } from '../../../../services/translation-client-myrequests';
import { TranslationUserService } from '../../../../services/translation-user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { TranslationAddCommentComponent } from './../../../translation-admin/components/translation-add-comment/translation-add-comment.component';

@Component({
  selector: 'app-translation-client-myrequests',
  templateUrl: './translation-client-myrequests.component.html',
  styleUrls: ['./translation-client-myrequests.component.css']
})
export class TranslationClientMyrequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: TranslationUserService,
    private myrequestsService: ClientMyrequestsService,
    public dialog: MatDialog
  ) {
    this.userId = this.userService.user.USER_ID;
  }

  ngOnInit() {
    this.getMyRequests();
  }

  getMyRequests() {
    this.isLoading = true;
    this.myrequestsService.getMyRequests(this.userId).subscribe((response) => {
      this.requestsList = response['data'];
      this.isLoading = false;
    },err=>{
      this.myrequestsService.tryagain();
    });
  }

  openAddCommentDialog(reqId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reqId;

    let dialogref = this.dialog.open(TranslationAddCommentComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getMyRequests();
      }
    });
  }

}
