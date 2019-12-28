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
    return 'ZDBkNmM3MWQtMzAxZS00YmNiLTgyOTctMTA4NDJkZDliYmVmfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
