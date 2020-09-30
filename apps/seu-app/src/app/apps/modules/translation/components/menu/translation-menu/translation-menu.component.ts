import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TranslationUserService } from '../../../services/translation-user';

@Component({
  selector: 'app-translation-menu',
  templateUrl: './translation-menu.component.html',
  styleUrls: ['./translation-menu.component.css']
})
export class TranslationMenuComponent implements OnInit, AfterContentInit {

  constructor(private userService: TranslationUserService) { }
  menuType = '';
  ngOnInit() {
    const currURL = document.location.href;
    if (this.userService.is_admin()) {
      this.menuType = 'admin';
    } else if (this.userService.is_emp()) {
      this.menuType = 'emp';
    } else if (this.userService.is_client()) {
      this.menuType = 'client';
    }
  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }
}
