import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppToasterService {

  constructor(private toastr: ToastrService) { }
  tryagain() {
    this.push([{ type: 'error', body: 'خطأ: حاول مرة أخري' }]);
  }
  

  download() {
    this.push([{ type: 'info', body: 'Downloading' }]);
  }

  push(messages) {

    messages.forEach((element: any) => {
      const type = element.type;
      const body = element.body;
      // tslint:disable-next-line: triple-equals
      if (type == 'success') {
        this.toastr.success('', body);
        // tslint:disable-next-line: triple-equals
      } else if (type == 'error') {
        this.toastr.error('', body);
      } else {
        this.toastr.info('', body);
      }
    });
  }
  messagesdis(msg) {
    this.toastr.success('', msg);
  }

}
