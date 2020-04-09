import * as Toast from 'nativescript-toast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToasterService {

  tryagain() {
    const toast = Toast.makeText('خطأ: حاول مرة أخري');
    toast.show();
  }
  push(messages) {
    for (let i = 0; i < messages.length; i++) {
        const toast = Toast.makeText(messages[i].body);
        toast.show();
      }

  }
  download() {
    const toast = Toast.makeText('Downloading');
    toast.show();
  }

}
