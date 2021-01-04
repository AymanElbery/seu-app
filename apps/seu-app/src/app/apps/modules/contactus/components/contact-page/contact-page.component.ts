import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css','../styles/contact.css']
})
export class ContactPageComponent implements OnInit {

  show = 'form';
  current = 'help';
  constructor() { }

  ngOnInit() {
  }
  toggle(show, current) {
    this.show = show;
    this.current = current;
    return false;
  }

}
