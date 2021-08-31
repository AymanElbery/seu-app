import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'city'})
export class City_pipe implements PipeTransform {
  transform(id, cities): string {
    return cities.find(city => city.ID == id).NAME_AR;
  }
}