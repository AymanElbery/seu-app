import { Component } from '@angular/core';
import { UserService } from '../../../../account/services/user.service';
import { CardService } from '../../services/card.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddUnivCardComponent } from './diag/add-univ-card/add-univ-card.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-requests',
  styleUrls: ['./requests.component.css'],
  templateUrl: './requests.component.html'
})
export class RequestsComponent {

  request;
  isLoading = false;
  std_id;
  constructor(
    public userService: UserService,
    private cardService: CardService,
    public translate: TranslateService,
    public dialog: MatDialog,
    private toastr: AppToasterService
  ) {
    //this.std_id = this.userService.userData.id;
    this.std_id = this.userService.getActiveRoleDetails()['id'];
    this.getRequest();
  }

  getRequest() {
    this.isLoading = true;
    this.cardService.getRequest(this.std_id).subscribe(
      (response: any) => {
        if (response) {
          this.request = response.data;
          this.isLoading = false;
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    )
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddUnivCardComponent, dialogConfig);
    dialogref.afterClosed().subscribe(refresh => {
      if (refresh)
        this.getRequest();
    });
  }

  delete(id) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.isLoading = true;
      this.cardService.deleteRequest(id).subscribe(
        (response: any) => {
          if (response) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("card.messages.card_has_been_deleted")
            }]);
            this.getRequest();
          }
        },
        error => {
        }
      )
    }
  } 

  print(id) {
    this.isLoading = true;
    this.cardService.printRequest(id).subscribe(
      (response: any) => {
        if (response) {
          this.cardService.downloadImage(response);
          this.isLoading = false;
        }
      },
      error => {
        this.isLoading = false;
      }
    )
  }
  
}