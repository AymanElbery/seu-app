import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'district'})
export class District_pipe implements PipeTransform {
  transform(id, districts): string {
    return districts.find(district => district.ID == id).NAME_AR;
  }
}