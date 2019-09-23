import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHrMinute]',

})
export class HrMinuteDirective  implements AfterViewInit {

  constructor(private el: ElementRef) { }

   @Input()
    public hr: number;

    HrMin;

    ngAfterViewInit(): void {
       this.HrMin =  'Min';
       this.el.nativeElement.innerText = this.hr * 10;
    }
}
