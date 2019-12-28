import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { HttpRequestService } from '../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    
  }
  async getNews(target, studentType, college, Branch) {
    this.configService.useCmsURI();
    const serviceParam = this.getServiceParams(target, studentType, college, Branch);
    //console.log('strart ' + this.configService.getApiURI());
    //console.log(serviceParam);
    const request = this.httRequest.GetRequest('News?' + serviceParam + '&lang=ar').toPromise();
    // tslint:disable-next-line: max-line-length
    // const request = this.httRequest.GetFullUrlRequest('http://64.202.186.104:86/umbraco/Surface/StudentServices/News?target=students&studentType=UG&college=BU&branch=01F&lang=ar').toPromise();
    //console.log(this.configService.getApiURI());
    this.configService.EndCmsURI();
    //console.log('end ' + this.configService.getApiURI());

    return request;
  }
   getServiceParams(target, studentType, college, Branch) {
    this.configService.baseUrl = 'StudentServices';
    if (target === 'students') {
      return 'target=' + target + '&studentType=' + studentType + '&college=' + college + '&branch=' + Branch;
    }
    if (target === 'staff') {
      return 'target=' + target + '&college=' + college + '&branch=' + Branch;
    }
    if (target === 'employee') {
      return 'target=' + target ;
    }


  }

  async getAds(target, studentType, college, Branch) {
    this.configService.useCmsURI();

    //console.log('strart ' + this.configService.getApiURI());

    const serviceParam = this.getServiceParams(target, studentType, college, Branch);

    const request = this.httRequest.GetRequest('Advertisement?' + serviceParam + '&lang=ar').toPromise();

    //console.log(this.configService.getApiURI());
    this.configService.EndCmsURI();
    //console.log('end ' + this.configService.getApiURI());

    return request;
  }
  async getEvents(target, studentType, college, Branch) {
    this.configService.useCmsURI();
    const serviceParam = this.getServiceParams(target, studentType, college, Branch);
    ////console.log('strart ' + this.configService.getApiURI());
    ////console.log(serviceParam);
    const request = this.httRequest.GetRequest('Events?' + serviceParam + '&lang=ar').toPromise();
    ////console.log(this.configService.getApiURI());
    this.configService.EndCmsURI();
    ////console.log('end ' + this.configService.getApiURI());

    return request;
  }

}
