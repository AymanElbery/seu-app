import { Toasty } from 'nativescript-toasty';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToasterService {

  tryagain() {
    const toast = new Toasty({ text: 'خطأ: حاول مرة أخري',
    yAxisOffset: 25,
    ios:{
      cornerRadius: 24
    }
  });
    toast.show();
  }

  saved() {
    const toast = new Toasty({ text: 'تم الحفظ',
    yAxisOffset: 25,
    ios:{
      cornerRadius: 24
    }
  });
    toast.show();
  }
  show(msg) {
    const toast = new Toasty({ text: msg,
    yAxisOffset: 25,
    ios:{
      cornerRadius: 24
    }
  });
    toast.show();
  }
  push(messages) {
    for (let i = 0; i < messages.length; i++) {
        const toast = new Toasty({ text: messages[i].body,
          yAxisOffset: 25,
    ios:{
      cornerRadius: 24
    }
        });
        toast.show();
      }

  }
  download() {
    const toast = new Toasty({ text: 'Downloading',
    yAxisOffset: 25,
    ios:{
      cornerRadius: 24
    }
  });
    toast.show();
  }

}
