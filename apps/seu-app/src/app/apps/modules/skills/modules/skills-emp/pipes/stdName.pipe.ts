import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getStdName'})

export class StdName implements PipeTransform {
  result;
  transform(std_id: any, students : any): string {
    students.forEach(student => {
      if (student.STD_ID == std_id) {
        this.result = student.FULL_NAME_AR;
      }
    });
    return this.result;
  }
}