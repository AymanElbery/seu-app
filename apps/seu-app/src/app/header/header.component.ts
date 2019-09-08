import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserManagerService } from '../shared/services/user-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
  constructor(private userManager: UserManagerService) {


  }
  subscription: Subscription;
  isNavbarCollapsed;

  status = false;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  logout() {
   this.userManager.logout();

  }
  ngOnInit() {

  this.subscription =  this.userManager.authNavStatus$.subscribe(res => this.status = res);
  }


}
