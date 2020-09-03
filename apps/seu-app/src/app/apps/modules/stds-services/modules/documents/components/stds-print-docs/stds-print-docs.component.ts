import { Component, OnInit } from '@angular/core';
import { StudentDocsService } from '../../../../services/docs.service';

@Component({
  selector: 'app-stds-print-docs',
  templateUrl: './stds-print-docs.component.html',
  styleUrls: ['./stds-print-docs.component.css']
})
export class StdsPrintDocsComponent implements OnInit {

  constructor(private stdservice: StudentDocsService) { }

  ngOnInit() {
  }

  isLoading = false;
  downloading = false;
  current_download = '';
  
  downloadRecord(lang) {
    this.current_download = 'record_' + lang;
    this.downloadfile("/docs/record/" + lang);
    return false;
  }
  downloadCert() {
    this.current_download = 'cert';
    this.downloadfile("/docs/cert");
    return false;
  }

  downloadfile(url) {
    this.downloading = true;
    this.stdservice.download_pdf_get(url).subscribe((response) => {
      if (!response['status']) {
        this.stdservice.notifyError(response['res_code']);
      } else {
        this.stdservice.downloadPDF(response);
      }
      this.downloading = false;
      this.current_download = '';
    }, error => {
      this.stdservice.tryagain();
      this.downloading = false;
      this.current_download = '';
    })
  }


}
