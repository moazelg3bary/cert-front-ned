import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject(false);
  }

  public setLoader(loading) {
    this.loading.next(loading);
  }
}
