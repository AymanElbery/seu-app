import { Component } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { Teaching_loadService } from '../../services/teaching_load.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-hod-all-loads',
  styleUrls: ['./hod-all-loads.component.css'],
  templateUrl: './hod-all-loads.component.html'
})
export class HodAllLoadsComponent {

  loads;
  filter_text;
  isLoading = false;
  email;
  constructor(
    public userService: UserService,
    public teaching_loadService: Teaching_loadService,
    public translate: TranslateService,
    private toastr: AppToasterService
    ) {
        this.getLoads();
    }

  getLoads() {
    this.isLoading = true;
    this.teaching_loadService.get("hod/loads")
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
    let url = "hod/update_status";
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

}