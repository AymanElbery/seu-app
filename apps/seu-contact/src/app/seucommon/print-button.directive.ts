import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener, ViewChild } from '@angular/core';
import * as fileSaver from 'file-saver';
import { HttpHeaders, HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AppToasterService } from '../shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { GlobalBaseService } from '../shared/services/global-base.service';
import { UserService } from '../account/services/user.service';


@Directive({
  selector: '[seu-auto-print]'
})

export class PrintButtonDirective {
  subscription: Subscription;
  isDownloading = false;
  @HostListener('click', ['$event']) onClick($event) {
    if (this.isDownloading) {
      return false;
    }
    var url = this.elmRef.nativeElement.href;
    this.addLoading();
    this.subscription = this.requesturls(url).subscribe(
      response => {
        this.removeLoading();
        const fileName = this.getFileNamePrefix(url) + '_' + new Date().getTime() + '.pdf';
        const fileContent: any = response.body;
        var blob = new Blob([fileContent], { type: "application/pdf" });
        fileSaver.saveAs(blob, fileName);
      },
      error => {
        this.removeLoading();
        this.toaster.tryagain();
      });
    return false;
  }
  getFileNamePrefix(url) {
    return url.replace(environment.baselink, '').split('/')[2]
  }
  addLoading() {
    // disable 
    this.isDownloading = true;
    let newel = this.rendered.createElement('i');
    this.rendered.addClass(newel, 'fa')
    this.rendered.addClass(newel, 'fa-spinner');
    this.rendered.addClass(newel, 'fa-spin');
    this.rendered.appendChild(this.elmRef.nativeElement, newel);
  }
  removeLoading() {
    // enable 
    this.isDownloading = false;
    this.rendered.removeChild(this.elmRef.nativeElement, this.elmRef.nativeElement.children[1]);
  }
  constructor(private elmRef: ElementRef, private rendered: Renderer2, private toaster: AppToasterService, private renderer: Renderer2, private http: HttpClient, private globalService: GlobalBaseService, private userService: UserService) {
  }


  ngOnInit() {
  }
  removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

      var prefix = encodeURIComponent(parameter) + '=';
      var pars = urlparts[1].split(/[&;]/g);

      //reverse iteration as may be destructive
      for (var i = pars.length; i-- > 0;) {
        //idiom for string.startsWith
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
  }

  requesturls(url: any) {
    const sid = this.globalService.getSID();
    const headers = new HttpHeaders({
      'Session-ID': sid,
      'Student-ID': this.userService.userData.username
    });
    console.log(url);
    return this.http.get(this.removeURLParameter(url, "sid"), { headers: headers, responseType: 'blob' as 'json', observe: 'response' });
  }
}
