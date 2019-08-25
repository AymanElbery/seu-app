import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserManagerService } from '../shared/services/user-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  subscription:Subscription;

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  status:Boolean=false;
  constructor(private userManager:UserManagerService) { 

   
  }


  logout()
  {
   this.userManager.logout();

  }
  ngOnInit() {
    
  this.subscription=  this.userManager.authNavStatus$.subscribe(res=>this.status=res);
  }


}
