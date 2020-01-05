import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { post } from 'selenium-webdriver/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject  } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$
  showError:boolean=false;
  public showMsg = new BehaviorSubject<boolean>(false);
  showMsg$=this.showMsg.asObservable();

  constructor(private postServ:PostsService) { }
  
  ngOnInit() {
    
  }


  GetPosts()
  {
   
  this.posts$=  this.postServ.getAuthPosts().pipe(map((res: any)=> res));
    
   
  }
  GetPostsAnon()
  {

   
  this.posts$=  this.postServ.getPosts().pipe(map((res: any)=> res) ,
  catchError(this.errorHandler));
    
   
   
  }

   showdata()
   {
    this.showMsg.next(false);
   }
  update()
  {
    this.showMsg.next(true);
  }

  errorHandler(error: HttpErrorResponse) {
     
    this.showMsg.next(true);
    
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        ` ${error.statusText} `
        )
    }
    
    
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');

  }

}
