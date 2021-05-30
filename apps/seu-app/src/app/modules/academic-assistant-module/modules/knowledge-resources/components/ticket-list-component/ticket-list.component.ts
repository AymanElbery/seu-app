import { Component } from '@angular/core';
import { UserService } from '../../../../../../account/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { KnowledgeResourcesService } from '../../services/knowledge-resources.service';
import { RegistrationAssistantFormComponent } from '../ticket-add-component/ticket-add.component';
import { TicketDetailsComponent } from './../ticket-details-component/ticket-details.component';

@Component({
  selector: 'sd-knowledge-resources-ticket-list',
  styleUrls: ['./ticket-list.component.css'],
  templateUrl: './ticket-list.component.html'
})
export class TicketListComponent {

  can_add_new = false;
  tickets;
  isLoading = false;
  std_id;
  constructor(
    public userService: UserService,
    public servie: KnowledgeResourcesService,
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
    dialogConfig.width = '70%';

    let dialogref = this.dialog.open(RegistrationAssistantFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result && result['refresh']) {
        this.getTickets();
      }
    });
  }

  getTickets() {
    this.isLoading = true;
    this.servie.getTickets().subscribe(
      (response: any) => {
        this.isLoading = false;
        this.tickets = response.data.requests;
        this.can_add_new = response.data.can_add_new;
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    )
  }

  openDetailsDialoge(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = id;

    let dialogref = this.dialog.open(TicketDetailsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(refresh => {
      if (refresh)
        this.getTickets();
    });
  }

  delete(id) {
    this.isLoading = true;
    this.servie.delete(id).subscribe(
      (response: any) => {
        this.toastr.push([{
          'type': 'success',
          'body': this.translate.instant('messages.request_deleted')
        }]);
        this.getTickets();
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    )
  }
}