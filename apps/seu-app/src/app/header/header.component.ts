import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserManagerService } from '../shared/services/user-manager.service';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../shared/user-service.service';
import { UserService } from '../account/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
  constructor(private userManager: UserManagerService, private userService: UserService) {


  }
  subscription: Subscription;
  isNavbarCollapsed;
  userData;
  status = false;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  logout() {
   this.userManager.logout();

  }
  ngOnInit() {



  console.log('header user data');
  this.userService.loadUserData().
  then(res => {
    console.log('get user name');
    console.log(this.userService.userData);
    this.userData = this.userService.userData;
    console.log('USERNAME :' + this.userService.userData.name_ar);
    if (!this.userService.userData.name_ar) {

      setTimeout(() => {
        window.location.reload();
      }, 500);


    }
  });

  // // tslint:disable-next-line: triple-equals
  // if (this.userService.userData.name_ar === '') {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 3000);







}
}
