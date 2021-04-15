import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css', '../styles/contact.css']
})
export class ContactPageComponent implements OnInit {
  isLoading = false;
  isdown = false;
  show = 'suggest';
  current = 'suggestions';
  constructor(private contact: ContactService
  ) { }

  ngOnInit() {
    this.contact.checkdown().subscribe(resposne => {
      this.isdown = resposne['data']['isdown'];
    })
  }
  toggle(show, current) {
    this.show = show;
    this.current = current;
    return false;
  }

}
