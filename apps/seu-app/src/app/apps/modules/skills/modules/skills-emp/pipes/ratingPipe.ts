import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ratingPipe'})

export class RatingPipe implements PipeTransform {
  transform(rating): string {
    return (rating) ? rating : 0;
  }
}