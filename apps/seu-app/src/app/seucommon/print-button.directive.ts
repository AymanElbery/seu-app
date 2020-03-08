import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener, ViewChild } from '@angular/core';
import * as fileSaver from 'file-saver';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AppToasterService } from '../shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { NewsComponent } from '../dashboard/news/news.component';


@Directive({
  selector: '[seu-auto-print]'
})

export class PrintButtonDirective {
  subscription: Subscription;
  isDownloading = false;
  @HostListener('click', ['$event']) onClick($event) {
    if(this.isDownloading){
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
    this.rendered.addClass(newel,'fas')
    this.rendered.addClass(newel,'fa-spinner');
    this.rendered.addClass(newel,'fa-spin');
    this.rendered.appendChild(this.elmRef.nativeElement,newel);
  }
  removeLoading() {
    // enable 
    this.isDownloading = false;
    this.rendered.removeChild(this.elmRef.nativeElement,this.elmRef.nativeElement.children[1]);
  }
  constructor(private elmRef: ElementRef, private rendered: Renderer2, private toaster: AppToasterService, private renderer: Renderer2, private http: HttpClient, ) {
  }


  ngOnInit() {
  }

  requesturls(url: any) {
    return this.http.get(url, { responseType: 'blob' as 'json', observe: 'response' });
  }
}
