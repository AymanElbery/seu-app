import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { HttpRequestService } from '../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {

  }
  async getNews(target, studentType, college, Branch) {
    this.configService.useCmsURI();
    const serviceParam = this.getServiceParams(target, studentType, college, Branch);
    //console.log('strart ' + this.configService.getApiURI());
    //console.log(serviceParam);
    const request = this.httRequest.GetRequest('News?' + serviceParam).toPromise();
    // tslint:disable-next-line: max-line-length
    // const request = this.httRequest.GetFullUrlRequest('http://64.202.186.104:86/umbraco/Surface/StudentServices/News?target=students&studentType=UG&college=BU&branch=01F&lang=ar').toPromise();
    //console.log(this.configService.getApiURI());
    this.configService.EndCmsURI();
    //console.log('end ' + this.configService.getApiURI());

    return request;
  }
  getServiceParams(target, studentType, college, Branch) {
    this.configService.baseUrl = 'StudentServices';
    let params = "";
    if (target === 'students') {
      params = 'target=' + target + '&studentType=' + studentType + '&college=' + college + '&branch=' + Branch;
    }
    if (target === 'Staff') {
      params = 'target=' + target + '&college=' + college + '&branch=' + Branch;
    }
    if (target === 'employee') {
      params = 'target=' + target;
    }
    params += "&lang=" + this.translate.currentLang;
    return params;
  }

  async getAds(target, studentType, college, Branch) {
    this.configService.useCmsURI();

    //console.log('strart ' + this.configService.getApiURI());

    const serviceParam = this.getServiceParams(target, studentType, college, Branch);

    const request = this.httRequest.GetRequest('Advertisement?' + serviceParam).toPromise();

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
    const request = this.httRequest.GetRequest('Events?' + serviceParam).toPromise();
    ////console.log(this.configService.getApiURI());
    this.configService.EndCmsURI();
    ////console.log('end ' + this.configService.getApiURI());

    return request;
  }

}
