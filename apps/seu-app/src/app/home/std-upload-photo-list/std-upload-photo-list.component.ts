import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from 'src/environments/environment';
import { StdUploadPhotoComponent } from '../std-upload-photo/std-upload-photo.component';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-std-upload-photo-list',
  templateUrl: './std-upload-photo-list.component.html',
  styleUrls: ['./std-upload-photo-list.component.scss']
})
export class StdUploadPhotoListComponent implements OnInit, OnDestroy {


  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private http: HttpClient, private reqservice: HttpRequestService, public userService: UserService) { }

  ngOnInit() {
    this.isLoading = true;
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
    this.isLoading = true;
    const headers = new HttpHeaders({
      Authorization: this.reqservice.getSSOAuth(),
      'Content-Type': 'application/json',
    });
    const std_id = this.userService.getActiveRoleDetails()['id'];
    this.http.get(environment.baselink + environment.servicesprefix + "/rest/upload_photo/list/" + std_id, { headers }).subscribe(
      res => {
        this.reqData = (res as any).data;
        this.msgs = (res as any).messages;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.maxWidth = "800px";
    dialogConfig.data = {'showCancelNotes':false,'allowCancel':true};
    let dialogref = this.dialog.open(StdUploadPhotoComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      this.getRequests();
    });
  }

  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      const headers = new HttpHeaders({
        Authorization: this.reqservice.getSSOAuth(),
        'Content-Type': 'application/json',
      });
      this.http.get(environment.baselink + environment.servicesprefix + "/rest/upload_photo/delete/" + id, { headers }).subscribe(
        res => {
          //this.toastr.push((res as any).messages);
          this.getRequests();
          this.deleting = false;
        }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }
}
