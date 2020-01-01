import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[downloadpdf]'
})

export class DownloadPrintDirective {

    @HostListener('click', ['$event'])
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Click from Host Element!');
    }

    constructor(el: ElementRef) {
        //alert('aaa');
        //console.log("YYYYY");
    }
}