//import * as Toast from 'nativescript-toast';
import { Toasty, ToastPosition } from 'nativescript-toasty';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToasterService {

  tryagain() {
    //const toast = Toast.makeText('خطأ: حاول مرة أخري');
    //toast.show();
    const toast = new Toasty({ text: 'خطأ: حاول مرة أخري' ,yAxisOffset: 50,ios:{cornerRadius:15}
  }).setToastPosition(ToastPosition.BOTTOM)
    ;
  toast.show();
  }
  push(messages) {
    for (let i = 0; i < messages.length; i++) {
      //  const toast = Toast.makeText(messages[i].body);
        //toast.show();
        const toast = new Toasty({ text: messages[i].body });
        toast.show();
      }

  }
  download() {
    //const toast = Toast.makeText('Downloading');
    //toast.show();
    const toast = new Toasty({ text: 'Downloading' });
    toast.show();
  }

}
