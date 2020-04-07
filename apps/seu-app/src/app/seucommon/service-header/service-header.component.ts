import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogPlayerComponent } from '../dialog-player/dialog-player.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'service-header',
  templateUrl: './service-header.component.html'
})
export class ServiceHeaderComponent implements OnInit {
  urldata = environment.service_json;
  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router) { }
  @Input() title;
  @Input() desc;
  @Input() pdf = false;
  @Input() video = false;
  _dataservice;
  //@Input() set video(name) {

  //}
  //@Input() set pdf(name) {

  //}

  _pdf = "";
  _vedio = "";
  ngOnInit() {
    if (this._dataservice) {
      this.setServiceSettings();
    } else {
      this.getdatajson().subscribe(dataservice => {
        this._dataservice = dataservice;
        this.setServiceSettings();
      });
    }
  }

  setServiceSettings() {
    this.pdf = false;
    this.video = false;

    const dataservice = this._dataservice;
    const current_url = this.router.url;
    if (dataservice[current_url]) {
      if (dataservice[current_url]['ar']["pdf"]) {
        this.pdf = true;
        this._pdf = this.urldata + dataservice[current_url]['ar']["pdf"];
      }
      if (dataservice[current_url]['ar']["vedio"]) {
        this.video = true;
        this._vedio = this.urldata + dataservice[current_url]['ar']["vedio"];
      }

    }
  }

  getdatajson() {
    return this.http.get('/assets/files/service.json');
  }

  playvedio(url) {
    //console.log(url);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "50%";
    dialogConfig.data = { url };
    this.dialog.open(DialogPlayerComponent, dialogConfig).afterClosed().subscribe(res => {

    });
  }

}
