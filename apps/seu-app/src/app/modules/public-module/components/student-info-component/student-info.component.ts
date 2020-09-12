import { Component } from '@angular/core';
import { UserService } from '../../../../account/services/user.service';
import { CardService } from '../../services/card.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-info',
  styleUrls: ['./student-info.component.css'],
  templateUrl: './student-info.component.html'
})
export class StudentInfoComponent {

  info;
  isLoading = false;
  code;
  std_id;

  constructor(
    public userService: UserService,
    public translate: TranslateService,
    public dialog: MatDialog,
    private toastr: AppToasterService,
    private route: ActivatedRoute
  ) {
    this.code = this.route.snapshot.params['code'];
    this.std_id = this.code.substr(this.code.length - 9); 
    this.getStdInfo();
  }

  ngOnInit() {
  }

  getStdInfo(){
    this.isLoading = true;
    this.userService.getStdData(this.std_id).subscribe(
      (response: any) => {
        if (response) {
          this.info = response.data;
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }
}