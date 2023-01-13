import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({name: 'getName'})

export class GetName implements PipeTransform {

  transform(email): string {
    let empsEmails = environment.chatbot_emps_emails;
    let empsNames = environment.chatbot_emps_names;
    let index = empsEmails.indexOf(email);

    return empsNames[index];
  }
}