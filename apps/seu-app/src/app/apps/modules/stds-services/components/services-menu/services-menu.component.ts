import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.component.css']
})
export class ServicesMenuComponent implements OnInit {
  current = '';
  have_docs_permession = false;
  have_reenroll_permession = false;
  constructor(
    private stdservice: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isLoggedIn = false;
  ngOnInit() {
    const path = this.route.snapshot.children[0]['url'][0];
    this.current = (path) ? path['path'] : "";

    this.have_docs_permession = this.stdservice.have_docs_permession;
    this.have_reenroll_permession = this.stdservice.have_reenroll_permession;
    this.isLoggedIn = this.stdservice.isLoggedIn;
    this.stdservice.userLoadedObservable.subscribe(() => {
      this.have_docs_permession = this.stdservice.have_docs_permession;
      this.have_reenroll_permession = this.stdservice.have_reenroll_permession;
      this.isLoggedIn = this.stdservice.isLoggedIn;
    });
  }


  redirectTo(code) {
    this.current = code;
    this.router.navigate([code], { relativeTo: this.route })
    return false;
  }

  logout() {
    this.stdservice.logout();
    return false;
  }
}
