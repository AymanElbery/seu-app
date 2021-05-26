import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appfilter',
    pure: false
})
export class AppFilterPipe implements PipeTransform {
    transform(items: any[], filter_text): any {
        if (!filter_text) {
            return items;
        }
        return items.filter(item => {
            let exist = false;
            Object.keys(item).forEach(key => {
                if (item[key] && item[key].indexOf(filter_text) !== -1) {
                    exist = true;
                }
            })
            return exist;
        });
    }
}