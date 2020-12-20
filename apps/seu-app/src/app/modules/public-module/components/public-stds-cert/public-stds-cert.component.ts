import { Component, OnInit } from '@angular/core';
import { PublicDocsService } from '../../services/docs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-stds-cert',
  templateUrl: './public-stds-cert.component.html',
  styleUrls: ['./public-stds-cert.component.css']
})
export class PublicStdsCertComponent implements OnInit {

  info;
  isLoading = false;
  code;

  constructor(public docservice: PublicDocsService,private route: ActivatedRoute) {
    this.code = this.route.snapshot.params['code'];
    this.getStdInfo();
  }

  ngOnInit() {
  }

  getStdInfo(){
    this.isLoading = true;
    this.docservice.getCertInfo(this.code).subscribe(
      (response: any) => {
        if (!response['status']) {
          this.docservice.notifyError(response['res_code']);
        }else{
          this.info = response['data'];
        }
        this.isLoading = false;
      },
      error => {
        this.docservice.tryagain();
        this.isLoading = false;
      }
    )
  }
}