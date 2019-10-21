import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
              
			  }


  getAuthPosts() {

  return  this.httRequest.GetAuthRequest('Posts');

  }
  getPosts() {

  return  this.httRequest.GetRequest('Posts');

  }

}
