import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatCrnTime'})

export class FormatTime implements PipeTransform {
  transform(str: string): string {
    var hours = Number(str.substring(0,2));
    var minutes = Number(str.substring(2,4));

    var timeValue;
    if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
    } else if (hours > 12) {
        timeValue= "" + (hours - 12);
    } else if (hours == 0) {
        timeValue= "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " م" : " ص";  // get AM/PM

    return timeValue;
  }
}