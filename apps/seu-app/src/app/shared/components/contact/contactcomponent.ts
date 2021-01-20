import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = "/contactus/index.html"
  }

}
