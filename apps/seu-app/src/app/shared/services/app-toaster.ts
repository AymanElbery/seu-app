import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppToasterService {

  constructor(private toastr: ToastrService) { }
  tryagain(){
    this.push([{type:'error',body:'حاول مرة أخري'}]);
  }
  push(messages) {

    messages.forEach((element: any) => {
      let type = element.type;
      let body = element.body;
      if (type == 'success') {
        this.toastr.success('', body);
      } else if (type == 'error') {
        this.toastr.error('', body);
      } else {
        this.toastr.info('', body);
      }
    });
  }

}
