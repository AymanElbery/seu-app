import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/account/services/user.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SDService } from '../../sd.service';

@Component({
  selector: 'sd-exams-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class SDExamsTicketDetailsComponent implements OnInit {

  isLoading;
  ticket;
  @Input() ticketId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<SDExamsTicketDetailsComponent>,
    private translate: TranslateService,
    private reqAssistantService: SDService,
    public userService: UserService,
    private toastr: AppToasterService
  ) {
  }

  ngOnInit() {

  }

  getTicketDetails() {
    this.isLoading = true;
    this.reqAssistantService.getTicketDetails(this.ticketId).subscribe(
      (response: any) => {
        if (response) {
          this.isLoading = false;
          this.ticket = response.data.ticket;
        }
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    )
  }

  downloading = {};
  download(file) {
    this.downloading = true;
    // const formData = new FormData();
    // formData.append('url', file['url']);
    this.reqAssistantService.download(file.url).subscribe(response => {
      if (response['status']) {
        console.log(response);
        response['data']['content'] = (response['data']['content']);
        const linkSource = `data:application/octet-stream;base64,${response['data']['content']}`;
        const downloadLink = document.createElement("a");
        const fileName = file['name'];

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
      this.downloading = false;
    }, error => {
      this.downloading = false;
    })
    return false;
  }


  closeDiag() {
    this.dialogRef.close();
  }

}
