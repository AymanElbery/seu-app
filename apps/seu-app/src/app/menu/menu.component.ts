import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuType = 1;
  constructor() {
    this.menuType = 1;
   }

  ngOnInit() {
    this.menuType = 1;
  }


}
