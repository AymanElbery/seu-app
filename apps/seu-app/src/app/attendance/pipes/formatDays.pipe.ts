import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatCrnDays'})

export class FormatDays implements PipeTransform {
  transform(days): string {
    const result = days.join();
    return result;
  }
}