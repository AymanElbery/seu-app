import { Component } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { Teaching_loadService } from '../../services/teaching_load.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-hr-all-loads',
  styleUrls: ['./hr-all-loads.component.css'],
  templateUrl: './hr-all-loads.component.html'
})
export class HRAllLoadsComponent {

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
    this.teaching_loadService.get("hr/loads")
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

  excel() {
    this.teaching_loadService.get("hr/donwload_loads").subscribe((response => {
      const linkSource = `data:application/octet-stream;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "teaching_loads.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }
}