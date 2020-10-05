import { Component, OnInit } from '@angular/core';
import { TranslationUserService } from '../../../services/translation-user';

@Component({
  selector: 'app-translation-admin-menu',
  templateUrl: './translation-admin-menu.component.html',
  styleUrls: ['./translation-admin-menu.component.css']
})
export class TranslationAdminMenuComponent implements OnInit {

  constructor(private user: TranslationUserService) { }
  is_admin = false;
  ngOnInit() {
    this.is_admin = this.user.is_admin();
  }

}
