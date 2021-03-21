import { Component } from '@angular/core';
import { UserService } from '../../../../../../account/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ReqAssistantService } from '../../services/req-assistant.service';
import { RegistrationAssistantFormComponent } from '../ticket-add-component/ticket-add.component';

@Component({
  selector: 'app-ticket-list',
  styleUrls: ['./ticket-list.component.css'],
  templateUrl: './ticket-list.component.html'
})
export class TicketListComponent {

  tickets;
  isLoading = false;
  std_id;
  constructor(
    public userService: UserService,
    public reqAssistantService: ReqAssistantService,
    public translate: TranslateService,
    public dialog: MatDialog,
    private toastr: AppToasterService
  ) {
    this.std_id = this.userService.getActiveRoleDetails()['id'];
    this.getTickets();
  }
  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(RegistrationAssistantFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result['refresh']) {
        this.getTickets();
      }
    });
  }

  getTickets() {
    this.isLoading = true;
    this.reqAssistantService.getTickets(this.std_id).subscribe(
      (response: any) => {
        if (response) {
          this.tickets = response.data;
          this.isLoading = false;
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    )
  }
}