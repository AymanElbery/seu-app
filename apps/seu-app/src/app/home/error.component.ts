import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../account/services/user.service';
@Component({
  selector: 'app-error',
  styleUrls: ['./error.component.scss'],
  templateUrl: './error.component.html'
})
export class AppErrorComponent implements OnInit, OnDestroy {
  selection;
  requesting = false;
  constructor(public userService: UserService) {

  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
