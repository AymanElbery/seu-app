import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {

  constructor() {
    super();
  }


  getSID() {
    return 'ZDJjMTRiYzQtMDM5My00NjgzLTk1ODgtZTU0M2Y1ZTMwM2YxfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0='; 
}
}
