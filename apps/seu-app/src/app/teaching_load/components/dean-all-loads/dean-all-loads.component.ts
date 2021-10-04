import { Component } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { Teaching_loadService } from '../../services/teaching_load.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RejectDeanReasonComponent } from './reject_dialogue/reject_dialogue.component';

@Component({
  selector: 'app-dean-all-loads',
  styleUrls: ['./dean-all-loads.component.css'],
  templateUrl: './dean-all-loads.component.html'
})
export class DeanAllLoadsComponent {

  loads;
  filter_text;
  isLoading = false;

  constructor(
    public userService: UserService,
    public teaching_loadService: Teaching_loadService,
    public translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog
    ) {
        this.getLoads();
    }

  getLoads() {
    this.isLoading = true;
    this.teaching_loadService.get("dean/loads")
    .subscribe(
      (response: any) => {
        if (response) {
          this.loads = response.data;
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }

  accept(id){
    this.isLoading = true;
    let url = "dean/update_status";
    let data = {id: id, status: 1};
    this.teaching_loadService.post(url, data)
    .subscribe(
      (response: any) => {
        if (response) {
          this.loads = response.data;
          this.isLoading = false;
          this.toastr.messagesdis(this.translate.instant('teaching_load.' + response['res_code']));
          this.getLoads();
        }
      },
      error => {
      }
    )
  }

  reject(id){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    if (id != 0) {
      dialogConfig.data = {
        id: id
      };
    }

    let dialogref = this.dialog.open(RejectDeanReasonComponent, dialogConfig);
    dialogref.afterClosed().subscribe(refresh => {
      if (refresh)
        this.getLoads();
    });
  }

}