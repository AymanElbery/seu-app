import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css', '../styles/contact.css']
})
export class ContactPageComponent implements OnInit {
  isLoading = false;
  show = 'suggest';
  current = 'suggestions';
  constructor() { }

  ngOnInit() {
  }
  toggle(show, current) {
    this.show = show;
    this.current = current;
    return false;
  }

}
